import { IModule } from "@core/lib/module";
import { customRoutes } from "./lib/routes";

export const module:IModule = {
    name: "darkwynd",
    routes: customRoutes,
};
