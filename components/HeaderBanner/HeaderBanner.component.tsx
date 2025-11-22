import { HeaderBannerProps } from "./HeaderBanner.d";
import { overridable } from "@core/lib/overridable";
import styles from './HeaderBanner.module.scss';

import bg from "./banner-bg.png";
import gradient from "./banner-gradient.png";
import logo from "./banner-logo.png";

export const HeaderBannerComponent = overridable(({ classes = styles }: HeaderBannerProps) =>
    <div style={{ background: `url(${gradient}) center, url(${bg}) center` }} className={classes.banner}>
        <img src={logo} alt="DarkWynd Logo" className={classes.logo} />
    </div>);
