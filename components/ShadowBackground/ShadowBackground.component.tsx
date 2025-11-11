import {ShadowBackgroundProps} from "./ShadowBackground.d";
import styles from './ShadowBackground.module.scss';
import { useEffect, useRef } from "react";

import shadowL from "./shadow-l.png";
import shadowR from "./shadow-r.png";

// Helper color utils
function clamp(n: number, min: number, max: number) { return Math.max(min, Math.min(max, n)); }
function hexToRgb(hex: string) {
	hex = hex.replace('#', '');
	if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
	const num = parseInt(hex, 16);
	return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}
function rgbToHsl(r: number, g: number, b: number) {
	r /= 255; g /= 255; b /= 255;
	const max = Math.max(r, g, b), min = Math.min(r, g, b);
	let h = 0, s = 0, l = (max + min) / 2;
	if (max !== min) {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
			case g: h = (b - r) / d + 2; break;
			case b: h = (r - g) / d + 4; break;
		}
		h /= 6;
	}
	return { h: h * 360, s: s * 100, l: l * 100 };
}
function parseColorToHsl(color: string) {
	try {
		if (color.startsWith('#')) {
			const { r, g, b } = hexToRgb(color);
			return rgbToHsl(r, g, b);
		}
		const rgbMatch = color.match(/rgba?\(([^)]+)\)/i);
		if (rgbMatch) {
			const [r, g, b] = rgbMatch[1].split(',').slice(0, 3).map(v => parseInt(v.trim(), 10));
			return rgbToHsl(r, g, b);
		}
		const hslMatch = color.match(/hsla?\(([^)]+)\)/i);
		if (hslMatch) {
			const [h, s, l] = hslMatch[1].split(',').slice(0, 3).map(v => parseFloat(v));
			return { h, s, l };
		}
	} catch {}
	// fallback bright blue
	return { h: 210, s: 90, l: 55 };
}
function hsla(h: number, s: number, l: number, a: number) {
	return `hsla(${Math.round(h)}, ${Math.round(clamp(s,0,100))}%, ${Math.round(clamp(l,0,100))}%, ${clamp(a,0,1)})`;
}

type BlobSpec = {
	// removed vx, vy, seed
	x: number; y: number;
	innerStop: number; outerStop: number;
	h: number; s: number; l: number;
	blurPct: number;
};

export const ShadowBackgroundComponent = ({
	children,
	baseColor = "#24A6FF",
	blobCount = 100,
	colorVariation = 1,       // 0..1
	animationSpeed = 0.06,       // % per second
	animationRandomness = 0.5,    // 0..1
    baseBlobSize = 5,
    sizeVariation = 0.4,
    baseBlurSize = 0,
    blurVariation = 0,
}: ShadowBackgroundProps) => {
	const layerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const layer = layerRef.current;
		if (!layer) return;

		const base = parseColorToHsl(baseColor);
		const count = blobCount; // clamp(blobCount, 1, 20);
		const rand = (min: number, max: number) => min + Math.random() * (max - min);

		 // reference radius for px->% conversion (smallest half-dimension)
		const rect = layer.getBoundingClientRect();
		const refRadius = Math.max(1, Math.min(rect.width, rect.height) / 2);

		// Create blobs (static)
		const blobs: BlobSpec[] = Array.from({ length: count }).map(() => {
			// vary color around base
			const h = (base.h + rand(-30, 30) * colorVariation + 360) % 360;
			const s = clamp(base.s + rand(-20, 20) * colorVariation, 30, 100);
			const l = clamp(base.l + rand(-15, 10) * colorVariation, 30, 80);

			 // inner (solid) radius as a percentage
			const innerStop = clamp(rand(0.7, 1.3) * baseBlobSize * (1 + rand(-sizeVariation, sizeVariation)), 0.5, 80);

			// blur width in px -> convert to % of refRadius
			const blurPx = Math.max(0, baseBlurSize * (1 + rand(-blurVariation, blurVariation)));
			const blurPct = clamp((blurPx / refRadius) * 100, 0, 100 - innerStop);

			return {
				x: rand(8, 92),
				y: rand(8, 92),
				innerStop,
				outerStop: innerStop + blurPct, // keep for compatibility
				h, s, l,
				blurPct
			};
		});

		// Static background (no jitter, no animation)
		const background = blobs.map(b => {
			const inner = hsla(b.h, clamp(b.s - 10, 0, 100), clamp(b.l + 25, 0, 100), 0.7);
			if (b.blurPct <= 0.0001) {
				return `radial-gradient(circle at ${b.x}% ${b.y}%, ${inner} 0%, ${inner} ${b.innerStop}%, hsla(${Math.round(b.h)}, ${Math.round(b.s)}%, ${Math.round(b.l)}%, 0) ${b.innerStop}%)`;
			}
			const outer = b.innerStop + b.blurPct;
			return `radial-gradient(circle at ${b.x}% ${b.y}%, ${inner} 0%, ${inner} ${b.innerStop}%, hsla(${Math.round(b.h)}, ${Math.round(b.s)}%, ${Math.round(b.l)}%, 0) ${outer}%)`;
		}).join(',');

		layer.style.background = background;

	}, [baseColor, blobCount, colorVariation, baseBlobSize, sizeVariation, baseBlurSize, blurVariation, animationSpeed, animationRandomness]);

	return (
		<div className={styles.shadowBackgroundContainer} style={{
			background: `url(${shadowL}) left top repeat-y, url(${shadowR}) right top repeat-y`,
		}}>
			{false && <div className={styles.blobLayer} ref={layerRef} />}
			<div
				className={styles.content}
				style={{
					background: `url(${shadowL}) left top repeat-y, url(${shadowR}) right top repeat-y`,
				}}
			>
                {children}
			</div>
		</div>
	);
}
