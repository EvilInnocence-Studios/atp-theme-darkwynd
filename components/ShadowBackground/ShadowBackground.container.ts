import { createInjector, inject, mergeProps } from "unstateless";
import {ShadowBackgroundComponent} from "./ShadowBackground.component";
import {IShadowBackgroundInputProps, ShadowBackgroundProps, IShadowBackgroundProps} from "./ShadowBackground.d";
import { overridable } from "@core/lib/overridable";

const injectShadowBackgroundProps = createInjector(({}:IShadowBackgroundInputProps):IShadowBackgroundProps => {
    return {};
});

const connect = inject<IShadowBackgroundInputProps, ShadowBackgroundProps>(mergeProps(
    injectShadowBackgroundProps,
));

export const ShadowBackground = overridable<IShadowBackgroundInputProps>(connect(ShadowBackgroundComponent));
