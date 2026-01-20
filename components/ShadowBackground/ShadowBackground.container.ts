import { overridable } from "@core/lib/overridable";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { createInjector, inject, mergeProps } from "unstateless";
import { ShadowBackgroundComponent } from "./ShadowBackground.component";
import { IShadowBackgroundInputProps, IShadowBackgroundProps, ShadowBackgroundProps } from "./ShadowBackground.d";
import { ShadowBackgroundPropEditor } from "./ShadowBackground.props";

const injectShadowBackgroundProps = createInjector(({}:IShadowBackgroundInputProps):IShadowBackgroundProps => {
    return {};
});

const connect = inject<IShadowBackgroundInputProps, ShadowBackgroundProps>(mergeProps(
    injectShadowBackgroundProps,
));

export const ShadowBackground = withLayoutMetadata(
    overridable<IShadowBackgroundInputProps>(connect(ShadowBackgroundComponent)),
    {
        name: "ShadowBackground",
        displayName: "Shadow Background",
        category: "Darkwynd",
        propEditor: ShadowBackgroundPropEditor,
    }
);
