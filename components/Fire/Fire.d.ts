export declare interface IFireProps {
    containerRef: React.RefObject<HTMLDivElement> | null;
    height: number;
    width: number;
}

// What gets passed into the component from the parent as attributes
export declare interface IFireInputProps {

}

export type FireProps = IFireInputProps & IFireProps;