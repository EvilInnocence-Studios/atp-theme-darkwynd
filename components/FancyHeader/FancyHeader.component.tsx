import {FancyHeaderProps} from "./FancyHeader.d";
import styles from './FancyHeader.module.scss';

import logo from "./logo-glowing.png";
import swoosh from "./swoosh.png";

export const FancyHeaderComponent = ({text}:FancyHeaderProps) => {
    return <div className={styles.headerContainer}>
        <h1 className={styles.curved} style={{background: `url(${swoosh})`}}>
            {text}<br/>
            <img src={logo} alt="DarkWynd Logo" className={styles.logo} />
        </h1>
     </div>;
}