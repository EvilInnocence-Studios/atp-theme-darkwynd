import { FancyHeaderProps } from "./FancyHeader.d";
import { overridable } from "@core/lib/overridable";
import styles from './FancyHeader.module.scss';

import logo from "./logo-glowing.png";
import swoosh from "./swoosh.png";
import clsx from "clsx";

export const FancyHeaderComponent = overridable(({ title, classes = styles, className, css }: FancyHeaderProps) => <>
    {css && <style>{css}</style>}
    <div className={clsx(classes.headerContainer, className)}>
        <h1 className={classes.curved} style={{ background: `url(${swoosh})` }}>
            {title}<br />
            <img src={logo} alt="DarkWynd Logo" className={classes.logo} />
        </h1>
    </div>
</>);