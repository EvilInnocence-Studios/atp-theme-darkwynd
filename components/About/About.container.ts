import { overridable } from "@core/lib/overridable";
import { createInjector, inject, mergeProps } from "unstateless";
import { AboutComponent } from "./About.component";
import { AboutProps, IAboutInputProps, IAboutProps, ICredit } from "./About.d";

import { services } from "@core/lib/api";
import { useLayoutData } from "@theming/lib/useLayoutData";
import { useEffect, useState } from "react";
import andrea from "./Andrea-Avatar.jpg";
import andy from "./Andy-Avatar.jpg";
import gemma from "./Gemma-Avatar.jpg";
import oliver from "./Oliver-Avatar.jpg";
import seta from "./Seta-Avatar.jpg";

const injectAboutProps = createInjector(({ }: IAboutInputProps): IAboutProps => {
    const [, setPageTitle] = useLayoutData<string>("pageTitle");
    const [credits, setCredits] = useState<ICredit[]>([]);

    const loadPage = async (slug: string) => ((await services().content.search({ slug })) || [])[0].content || null;

    useEffect(() => {
        setPageTitle("About Us");

        const baseCredits = [
            { name: "Andrea", role: "Writer", icon: andrea, slug: "andrea", content: null },
            { name: "Gemma", role: "Artist", icon: gemma, slug: "gemma", content: null },
            { name: "Seta", role: "Colorist", icon: seta, slug: "seta", content: null },
            { name: "Kaysa's Dibujos", role: "Extras", icon: oliver, slug: "oliver", content: null },
            { name: "Andy", role: "Producer", icon: andy, slug: "andy", content: null },
        ];

        setCredits(baseCredits);

        baseCredits.forEach(credit => loadPage(credit.slug).then((content) => {
            setCredits(oldCredits => oldCredits.map(
                c => credit.slug === c.slug ? { ...c, content } : c
            ));
        }));
    }, []);

    return { credits, isLoading: !credits.length };
});

const connect = inject<IAboutInputProps, AboutProps>(mergeProps(
    injectAboutProps,
));

export const About = overridable<IAboutInputProps>(connect(AboutComponent));
