import { overridable } from "@core/lib/overridable";
import { useLayoutData } from "@core/lib/useLayoutData";
import { useEffect } from "react";
import { createInjector, inject, mergeProps } from "unstateless";
import { LinksComponent } from "./Links.component";
import { ILinksInputProps, ILinksProps, LinksProps } from "./Links.d";

const injectLinksProps = createInjector(({ }: ILinksInputProps): ILinksProps => {
    const [, setPageTitle] = useLayoutData<string>("pageTitle");

    useEffect(() => {
        setPageTitle("Links");
    }, []);

    return {};
});

const connect = inject<ILinksInputProps, LinksProps>(mergeProps(
    injectLinksProps,
));

export const Links = overridable<ILinksInputProps>(connect(LinksComponent));
