import { overridable } from "@core/lib/overridable";
import { createInjector, inject, mergeProps } from "unstateless";
import { LinksComponent } from "./Links.component";
import { ILinksInputProps, ILinksProps, LinksProps } from "./Links.d";

const injectLinksProps = createInjector(({}:ILinksInputProps):ILinksProps => {
    return {};
});

const connect = inject<ILinksInputProps, LinksProps>(mergeProps(
    injectLinksProps,
));

export const Links = overridable<ILinksInputProps>(connect(LinksComponent));
