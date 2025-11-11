import { comicPlugins } from "@comic";
import { IModule } from "@core/lib/module";
import { NewProducts } from "@store/components/NewProducts";
import { customRoutes } from "./lib/routes";

export const module:IModule = {
    name: "darkwynd",
    routes: customRoutes,
};

comicPlugins.latestPage.extras.register(50, () => <>
    <NewProducts title="Featured Products" />
    <div style={{width: "100%", height: "128px"}} />
</>);