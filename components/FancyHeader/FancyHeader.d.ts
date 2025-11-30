export declare interface IFancyHeaderProps {
    title: string;
}

// What gets passed into the component from the parent as attributes
export declare interface IFancyHeaderInputProps {
    text?: string;
    classes?: any;
}

export type FancyHeaderProps = IFancyHeaderInputProps & IFancyHeaderProps;