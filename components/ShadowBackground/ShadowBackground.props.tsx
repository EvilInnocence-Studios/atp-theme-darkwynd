import { Switch } from "antd";
import { IShadowBackgroundInputProps } from "./ShadowBackground";

export const ShadowBackgroundPropEditor = (
    {
        hideLeftTop,
        hideLeftBottom,
        hideLeftGradient,
        hideLeftWisps,
        hideRightTop,
        hideRightBottom,
        hideRightGradient,
        hideRightWisps,
    }: IShadowBackgroundInputProps,
    _updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => <>
    <Switch 
        checked={hideLeftTop}
        unCheckedChildren="Show Left Top"
        checkedChildren="Hide Left Top"
        onChange={(checked) => updateProp("hideLeftTop")(checked)}
    />
    <Switch 
        checked={hideLeftBottom}
        unCheckedChildren="Show Left Bottom"
        checkedChildren="Hide Left Bottom"
        onChange={(checked) => updateProp("hideLeftBottom")(checked)}
    />
    <Switch 
        checked={hideLeftGradient}
        unCheckedChildren="Show Left Gradient"
        checkedChildren="Hide Left Gradient"
        onChange={(checked) => updateProp("hideLeftGradient")(checked)}
    />
    <Switch 
        checked={hideLeftWisps}
        unCheckedChildren="Show Left Wisps"
        checkedChildren="Hide Left Wisps"
        onChange={(checked) => updateProp("hideLeftWisps")(checked)}
    />
    <Switch 
        checked={hideRightTop}
        unCheckedChildren="Show Right Top"
        checkedChildren="Hide Right Top"
        onChange={(checked) => updateProp("hideRightTop")(checked)}
    />
    <Switch 
        checked={hideRightBottom}
        unCheckedChildren="Show Right Bottom"
        checkedChildren="Hide Right Bottom"
        onChange={(checked) => updateProp("hideRightBottom")(checked)}
    />
    <Switch 
        checked={hideRightGradient}
        unCheckedChildren="Show Right Gradient"
        checkedChildren="Hide Right Gradient"
        onChange={(checked) => updateProp("hideRightGradient")(checked)}
    />
    <Switch 
        checked={hideRightWisps}
        unCheckedChildren="Show Right Wisps"
        checkedChildren="Hide Right Wisps"
        onChange={(checked) => updateProp("hideRightWisps")(checked)}
    />
</>;