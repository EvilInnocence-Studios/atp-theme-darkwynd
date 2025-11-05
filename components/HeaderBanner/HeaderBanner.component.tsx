import {HeaderBannerProps} from "./HeaderBanner.d";
import styles from './HeaderBanner.module.scss';

import bg from "./banner-bg.png";
import gradient from "./banner-gradient.png";
import logo from "./banner-logo.png";

export const HeaderBannerComponent = ({}:HeaderBannerProps) =>
    <div style={{background: `url(${gradient}) center, url(${bg}) center`}} className={styles.banner}>
        <img src={logo} alt="DarkWynd Logo" className={styles.logo} />
    </div>;
