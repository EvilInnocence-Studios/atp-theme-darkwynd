import { useEffect, useRef } from "react";
import {FireProps} from "./Fire.d";
import styles from './Fire.module.scss';
import clsx from "clsx";
import { GPU } from "gpu.js";

export const FireComponent = ({containerRef, height, width}:FireProps) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || width <= 0 || height <= 0) return;

        // Scale to device pixel ratio for crisp rendering
        const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
        const pxW = Math.max(1, Math.floor(width * dpr));
        const pxH = Math.max(1, Math.floor(height * dpr));
        canvas.width = pxW;
        canvas.height = pxH;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        // Seed sparks
        const N = 500; // number of sparks
        const x0 = new Float32Array(N);
        const y0 = new Float32Array(N);
        const vx = new Float32Array(N);
        const vy = new Float32Array(N);
        const rad = new Float32Array(N);
        const cr = new Float32Array(N);
        const cg = new Float32Array(N);
        const cb = new Float32Array(N);

        for (let i = 0; i < N; i++) {
            // Start positions biased to bottom-left (some start slightly offscreen)
            x0[i] = (Math.random() * 1.2 - 0.2) * pxW;          // [-0.2W, 0.4W]
            y0[i] = (0.6 + Math.random() * 1.0) * pxH;          // [0.6H, 1.1H]

            // Drift up-right: +X, -Y with variation
            const base = 28 + Math.random() * 42;               // px/s
            const angleJitter = (Math.random() - 0.5) * 0.35;   // radians jitter
            const cos = Math.cos(angleJitter + Math.PI * 0.125);
            const sin = Math.sin(angleJitter + Math.PI * 0.125);
            vx[i] = Math.abs(base * cos) + Math.random() * base * 0.5;  // ensure > 0
            vy[i] = Math.abs(base * Math.abs(sin) + base * 0.25) + Math.random() * base * 0.5; // ensure > 0

            // Soft circle radius in device pixels
            rad[i] = (2.0 + Math.random() * 7.0) * dpr;

            // Red/Orange/Yellow tint
            const t = Math.random();
            if (t < 0.33) {        // yellow
                cr[i] = 1.0; cg[i] = 0.78 + Math.random() * 0.15; cb[i] = 0.10 + Math.random() * 0.10;
            } else if (t < 0.66) { // orange
                cr[i] = 1.0; cg[i] = 0.50 + Math.random() * 0.20; cb[i] = 0.02 + Math.random() * 0.06;
            } else {               // red
                cr[i] = 1.0; cg[i] = 0.25 + Math.random() * 0.15; cb[i] = 0.0;
            }
            // Removed static dim; fading handled in the kernel so sparks attenuate near the top-right
        }

        const gpu = new GPU({canvas, mode: "webgl" });
        const kernel = gpu
            .createKernel(function(
                time: number,
                x0: number[], y0: number[],
                vx: number[], vy: number[],
                rad: number[],
                cr: number[], cg: number[], cb: number[]
            ) {
                const W = this.output.x;
                const H = this.output.y;
                const x = this.thread.x;
                const y = this.thread.y;

                // Spatial fade: bright at bottom-left, fades toward top-right
                const u = x / W;                 // 0 at left, 1 at right
                const v = 1.0 - (y / H);         // 1 at bottom, 0 at top
                const fade = Math.max(0.0, Math.min(1.0, Math.min(v, 1-u)));

                let r = 0.0;
                let g = 0.0;
                let b = 0.0;

                for (let i = 0; i < (this.constants.count as number); i++) {
                    // Position with wrap-around
                    const fx = x0[i] + vx[i] * time;
                    const fy = y0[i] + vy[i] * time;

                    const sx = fx - Math.floor(fx / W) * W;
                    const sy = fy - Math.floor(fy / H) * H;

                    const dx = x - sx;
                    const dy = y - sy;
                    const rr = rad[i];
                    const d2 = dx * dx + dy * dy;

                    // Gaussian falloff for soft, blurry circles
                    let intensity = Math.exp(-d2 / (2.0 * rr * rr));

                    // Multi-octave flicker: scaled octaves for richer randomness
                    const phase = x0[i] * 0.0013 + y0[i] * 0.0017 + i * 0.113;
                    const o1 = Math.sin(time * 6.0 + phase);
                    const o2 = Math.sin(time * 12.0 + phase * 1.7);
                    const o3 = Math.sin(time * 24.0 + phase * 2.3);
                    const flicker = 0.90 + 0.08 * o1 + 0.05 * o2 + 0.03 * o3;
                    intensity *= flicker;

                    // Apply spatial fade so sparks fade out near the top-right
                    intensity *= fade;

                    r += cr[i] * intensity;
                    g += cg[i] * intensity;
                    b += cb[i] * intensity;
                }

                r = Math.min(1.0, r);
                g = Math.min(1.0, g);
                b = Math.min(1.0, b);
                const a = Math.min(1.0, Math.max(r, Math.max(g, b)));

                // @ts-ignore provided by gpu.js in graphical kernels
                this.color(r, g, b, a);
            })
            .setGraphical(true)
            .setConstants({ count: N })
            .setOutput([pxW, pxH])
            .setContext(canvas.getContext("webgl", {premultipliedAlpha: false, alpha: true}));

        let raf = 0;
        const start = performance.now();
        const loop = (now: number) => {
            const t = (now - start) / 1000;
            // Supply spark seeds each frame
            (kernel as unknown as (
                t: number,
                x0: Float32Array, y0: Float32Array,
                vx: Float32Array, vy: Float32Array,
                rad: Float32Array,
                cr: Float32Array, cg: Float32Array, cb: Float32Array
            ) => void)(t, x0, y0, vx, vy, rad, cr, cg, cb);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(raf);
            try { gpu.destroy(); } catch {}
        };
    }, [width, height]);

    return (
        <div ref={containerRef} className={clsx([styles.fire, "fireContainer"])}>
            <canvas ref={canvasRef} />
        </div>
    );
};
