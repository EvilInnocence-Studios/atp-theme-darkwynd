import { IModule } from "@core/lib/module";
import { ComponentRegistry } from "@theming/lib/layout/componentRegistry";
import { FancyHeader } from "./components/FancyHeader";
import { ShadowBackground } from "./components/ShadowBackground";
import { customRoutes } from "./lib/routes";

export const module: IModule = {
    name: "darkwynd",
    routes: customRoutes,
};

ComponentRegistry.register("FancyHeader", FancyHeader, { category: "Layouts", displayName: "Fancy Header" });
ComponentRegistry.register("ShadowBackground", ShadowBackground, { category: "Layouts", displayName: "Shadow Background" });
