import { ShadowBackgroundProps } from "./ShadowBackground.d";
import styles from './ShadowBackground.module.scss';

import shadowLBottom from "./shadow-l-bottom.png";
import shadowLGradient from "./shadow-l-gradient.png";
import shadowLTop from "./shadow-l-top.png";
import showdowLWisps from "./shadow-l-mid.png";
import shadowRTop from "./shadow-r-top.png";
import shadowRBottom from "./shadow-r-bottom.png";
import shadowRGradient from "./shadow-r-gradient.png";
import showdowRWisps from "./shadow-r-mid.png";


export const ShadowBackgroundComponent = ({
	children,
	hideLeftBottom, hideLeftGradient, hideLeftTop, hideLeftWisps,
	hideRightBottom, hideRightGradient, hideRightTop, hideRightWisps,
}: ShadowBackgroundProps) => {
	const background = [
		!hideLeftGradient && `url(${shadowLGradient}) left top repeat-y`,
		!hideLeftTop && `url(${shadowLTop}) left top no-repeat`,
		!hideLeftBottom && `url(${shadowLBottom}) left bottom no-repeat`,
		!hideLeftWisps && `url(${showdowLWisps}) left top repeat-y`,
		!hideRightGradient && `url(${shadowRGradient}) right top repeat-y`,
		!hideRightTop && `url(${shadowRTop}) right top no-repeat`,
		!hideRightBottom && `url(${shadowRBottom}) right bottom no-repeat`,
		!hideRightWisps && `url(${showdowRWisps}) right top repeat-y`,
	].filter(b => b).join(", ");

	return (
		<div className={styles.shadowBackgroundContainer} style={{background}}>
			<div className={styles.content}>
                {children}
			</div>
		</div>
	);
}
