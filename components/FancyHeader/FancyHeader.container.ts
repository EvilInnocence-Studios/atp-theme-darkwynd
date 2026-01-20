import { overridable } from "@core/lib/overridable";
import { useLayoutData } from "@theming/lib/useLayoutData";
import { createInjector, inject, mergeProps } from "unstateless";
import { FancyHeaderComponent } from "./FancyHeader.component";
import { FancyHeaderProps, IFancyHeaderInputProps, IFancyHeaderProps } from "./FancyHeader.d";

const injectFancyHeaderProps = createInjector(({ text }: IFancyHeaderInputProps): IFancyHeaderProps => {
    const [contextTitle] = useLayoutData<string>("pageTitle");

    const title = text || contextTitle;

    return { title };
});

const connect = inject<IFancyHeaderInputProps, FancyHeaderProps>(mergeProps(
    injectFancyHeaderProps,
));

export const FancyHeader = overridable<IFancyHeaderInputProps>(connect(FancyHeaderComponent));
