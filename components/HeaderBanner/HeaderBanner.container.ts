import { createInjector, inject, mergeProps } from "unstateless";
import {HeaderBannerComponent} from "./HeaderBanner.component";
import {IHeaderBannerInputProps, HeaderBannerProps, IHeaderBannerProps} from "./HeaderBanner.d";
import { overridable } from "@core/lib/overridable";

const injectHeaderBannerProps = createInjector(({}:IHeaderBannerInputProps):IHeaderBannerProps => {
    return {};
});

const connect = inject<IHeaderBannerInputProps, HeaderBannerProps>(mergeProps(
    injectHeaderBannerProps,
));

export const HeaderBanner = overridable<IHeaderBannerInputProps>(connect(HeaderBannerComponent));
