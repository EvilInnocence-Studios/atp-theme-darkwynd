import { ShadowBackgroundProps } from "./ShadowBackground.d";
import styles from './ShadowBackground.module.scss';

// import shadowL from "./shadow-l.png";
import shadowR from "./shadow-r.png";

import shadowLBottom from "./shadow-l-bottom.png";
import shadowLGradient from "./shadow-l-gradient.png";
import shadowLTop from "./shadow-l-top.png";
// import shadowRTop from "./shadow-r-top.png";
// import shadowRBottom from "./shadow-r-bottom.png";
// import shadowRGradient from "./shadow-r-gradient.png";


export const ShadowBackgroundComponent = ({
	children,
}: ShadowBackgroundProps) => {
	const background = `
		url(${shadowLTop}) left top no-repeat,
		url(${shadowLBottom}) left bottom no-repeat,
		url(${shadowLGradient}) left top repeat-y,
		url(${shadowR}) right top repeat-y
	`;

	return (
		<div className={styles.shadowBackgroundContainer} style={{background}}>
			<div className={styles.content}>
                {children}
			</div>
		</div>
	);
}
