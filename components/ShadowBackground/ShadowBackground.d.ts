export declare interface IShadowBackgroundProps {

}

// What gets passed into the component from the parent as attributes
export declare interface IShadowBackgroundInputProps {
    children?: React.ReactNode;
    hideLeftTop?: boolean;
    hideLeftBottom?: boolean;
    hideLeftGradient?: boolean;
    hideLeftWisps?: boolean;
    hideRightTop?: boolean;
    hideRightBottom?: boolean;
    hideRightGradient?: boolean;
    hideRightWisps?: boolean;
}

export type ShadowBackgroundProps = IShadowBackgroundInputProps & IShadowBackgroundProps;