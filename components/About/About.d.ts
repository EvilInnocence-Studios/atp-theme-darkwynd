export declare interface ICredit {
    name: string;
    role: string;
    icon: string;
    slug: string;
}

export declare interface IAboutProps {
    credits: ICredit[];
    isLoading: boolean;
}

// What gets passed into the component from the parent as attributes
export declare interface IAboutInputProps {

}

export type AboutProps = IAboutInputProps & IAboutProps;