import { Editable } from "@core/components/Editable/Editable.container";
import { Label } from "@core/components/Label";
import { IFancyHeaderInputProps } from "./FancyHeader";

export const FancyHeaderPropEditor = (
    {text}:IFancyHeaderInputProps,
    _updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => <Label label="Text">
    <Editable value={text?.toString() || ""} onChange={(text) => updateProp("text")(text)}/>
</Label>;