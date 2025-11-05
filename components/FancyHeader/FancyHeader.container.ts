import { createInjector, inject, mergeProps } from "unstateless";
import {FancyHeaderComponent} from "./FancyHeader.component";
import {IFancyHeaderInputProps, FancyHeaderProps, IFancyHeaderProps} from "./FancyHeader.d";
import { overridable } from "@core/lib/overridable";

const injectFancyHeaderProps = createInjector(({}:IFancyHeaderInputProps):IFancyHeaderProps => {
    return {};
});

const connect = inject<IFancyHeaderInputProps, FancyHeaderProps>(mergeProps(
    injectFancyHeaderProps,
));

export const FancyHeader = overridable<IFancyHeaderInputProps>(connect(FancyHeaderComponent));
