import { IModule } from "@core/lib/module";
import { ComponentRegistry } from "@theming/lib/layout/componentRegistry";
import { FancyHeader } from "./components/FancyHeader";
import { ShadowBackground } from "./components/ShadowBackground";
import { customRoutes } from "./lib/routes";

export const module: IModule = {
    name: "darkwynd",
    routes: customRoutes,
};

ComponentRegistry.register(FancyHeader);
ComponentRegistry.register("ShadowBackground", ShadowBackground, { category: "Darkwynd", displayName: "Shadow Background" });
