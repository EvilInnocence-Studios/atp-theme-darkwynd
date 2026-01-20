import { string } from "css-tree";

export declare interface IFancyHeaderProps {
    title: string;
}

// What gets passed into the component from the parent as attributes
export declare interface IFancyHeaderInputProps {
    text?: string;
    classes?: any;
    className?: string;
    css?: string;
}

export type FancyHeaderProps = IFancyHeaderInputProps & IFancyHeaderProps;