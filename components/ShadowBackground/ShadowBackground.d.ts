export declare interface IShadowBackgroundProps {

}

// What gets passed into the component from the parent as attributes
export declare interface IShadowBackgroundInputProps {
    children?: React.ReactNode;
	baseColor?: string; // CSS color string, e.g., "#24A6FF"
	blobCount?: number; // number of blobs to render
	colorVariation?: number; // 0..1, how much to vary around baseColor
	animationSpeed?: number; // 0..1, relative speed of drift
	animationRandomness?: number; // 0..1, wobbly movement intensity
	baseBlobSize?: number;     // typical outer radius in %, default ~40
	sizeVariation?: number;    // 0..1, +/- variation around baseBlobSize, default ~0.4
    baseBlurSize?: number; // in px, default 100
    blurVariation?: number; // in px, default 50
}

export type ShadowBackgroundProps = IShadowBackgroundInputProps & IShadowBackgroundProps;