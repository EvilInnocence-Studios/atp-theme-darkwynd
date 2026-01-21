import { ShadowBackgroundProps } from "./ShadowBackground.d";
import { overridable } from "@core/lib/overridable";
import styles from './ShadowBackground.module.scss';

import shadowLBottom from "./shadow-l-bottom.png";
import shadowLGradient from "./shadow-l-gradient.png";
import shadowLTop from "./shadow-l-top.png";
import showdowLWisps from "./shadow-l-mid.png";
import shadowRTop from "./shadow-r-top.png";
import shadowRBottom from "./shadow-r-bottom.png";
import shadowRGradient from "./shadow-r-gradient.png";
import showdowRWisps from "./shadow-r-mid.png";
import { SlotRenderer } from "@theming/components/SlotRenderer";
import clsx from "clsx";


export const ShadowBackgroundComponent = overridable(({
	hideLeftBottom, hideLeftGradient, hideLeftTop, hideLeftWisps,
	hideRightBottom, hideRightGradient, hideRightTop, hideRightWisps,
	classes = styles,
	slots,
	__layoutId,
	className, css,
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

	return <>
		{css && <style>{css}</style>}
		<div className={clsx(className, classes.shadowBackgroundContainer)} style={{ background }}>
			<div className={classes.content}>
				<SlotRenderer
					slots={slots?.[`children`]} 
					parentId={__layoutId}
					slotName="children"
					getDisplayName={() => "Children"}
				/>
			</div>
		</div>
	</>;
});
