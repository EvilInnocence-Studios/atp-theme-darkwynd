import {ShadowBackgroundProps} from "./ShadowBackground.d";
import styles from './ShadowBackground.module.scss';

import shadowL from "./shadow-l.png";
import shadowR from "./shadow-r.png";

export const ShadowBackgroundComponent = ({children}:ShadowBackgroundProps) =>
    <div className={styles.shadowBackgroundContainer}>
        <div
            className={styles.shadowBackground}
            style={{background: `url(${shadowL}) left top repeat-y`, backgroundSize: "40%"}}
        />
        <div
            className={styles.shadowBackground}
            style={{background: `url(${shadowR}) right top repeat-y`, backgroundSize: "40%"}}
        />
        <div className={styles.content}>
            {children}
        </div>
    </div>;
