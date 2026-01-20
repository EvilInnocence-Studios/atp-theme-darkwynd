import { ComponentRegistry, containerLayoutComponent } from "@theming/lib/layout/componentRegistry";
import { IModule } from "@core/lib/module";
import { FancyHeader } from "./components/FancyHeader";
import { ShadowBackground } from "./components/ShadowBackground";
import { customRoutes } from "./lib/routes";

export const module: IModule = {
    name: "darkwynd",
    routes: customRoutes,
};

ComponentRegistry.register("FancyHeader", FancyHeader, { category: "Layouts", displayName: "Fancy Header" });
ComponentRegistry.register("ShadowBackground", containerLayoutComponent(ShadowBackground), { category: "Layouts", displayName: "Shadow Background" });
