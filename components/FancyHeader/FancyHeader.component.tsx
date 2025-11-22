import { FancyHeaderProps } from "./FancyHeader.d";
import { overridable } from "@core/lib/overridable";
import styles from './FancyHeader.module.scss';

import logo from "./logo-glowing.png";
import swoosh from "./swoosh.png";

export const FancyHeaderComponent = overridable(({ text, classes = styles }: FancyHeaderProps) => {
    return <div className={classes.headerContainer}>
        <h1 className={classes.curved} style={{ background: `url(${swoosh})` }}>
            {text}<br />
            <img src={logo} alt="DarkWynd Logo" className={classes.logo} />
        </h1>
    </div>;
});