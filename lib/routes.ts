import { About } from "../components/About";
import { Links } from "../components/Links";

export const customRoutes = {
    public: [
        {path: "/team", component: About},
        {path: "/links", component: Links}
    ]
};
