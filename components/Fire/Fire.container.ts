import { overridable } from "@core/lib/overridable";
import { useLayoutEffect, useRef, useState } from "react";
import { createInjector, inject, mergeProps } from "unstateless";
import { FireComponent } from "./Fire.component";
import { FireProps, IFireInputProps, IFireProps } from "./Fire.d";

const injectFireProps = createInjector(({}:IFireInputProps):IFireProps => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const update = () => {
            const { width: w, height: h } = el.getBoundingClientRect();
            setWidth(Math.round(w));
            setHeight(Math.round(h));
        };

        update();

        const ro = new ResizeObserver(update);
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    return { containerRef, height, width };
});

const connect = inject<IFireInputProps, FireProps>(mergeProps(
    injectFireProps,
));

export const Fire = overridable<IFireInputProps>(connect(FireComponent));
