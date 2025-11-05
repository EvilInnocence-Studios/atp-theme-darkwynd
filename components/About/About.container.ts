import { overridable } from "@core/lib/overridable";
import { createInjector, inject, mergeProps } from "unstateless";
import { AboutComponent } from "./About.component";
import { AboutProps, IAboutInputProps, IAboutProps } from "./About.d";

import andrea from "./Andrea-Avatar.jpg";
import andy from "./Andy-Avatar.jpg";
import gemma from "./Gemma-Avatar.jpg";
import oliver from "./Oliver-Avatar.jpg";
import seta from "./Seta-Avatar.jpg";

const injectAboutProps = createInjector(({}:IAboutInputProps):IAboutProps => {
    const credits = [
        { name: "Andrea",           role: "Writer",   icon: andrea, slug: "andrea" },
        { name: "Gemma",            role: "Artist",   icon: gemma,  slug: "gemma"  },
        { name: "Seta",             role: "Colorist", icon: seta,   slug: "seta"   },
        { name: "Kaysa's Dibujos",  role: "Extras",   icon: oliver, slug: "oliver" },
        { name: "Andy",             role: "Producer", icon: andy,   slug: "andy"   },
    ];
    
    return {credits, isLoading: !credits.length};
});

const connect = inject<IAboutInputProps, AboutProps>(mergeProps(
    injectAboutProps,
));

export const About = overridable<IAboutInputProps>(connect(AboutComponent));
