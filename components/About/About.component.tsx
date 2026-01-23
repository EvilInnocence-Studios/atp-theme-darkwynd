import { Snippet } from "@common/components/Snippet";
import { overridable } from "@core/lib/overridable";
import { AboutProps } from "./About.d";
import styles from './About.module.scss';

export const AboutComponent = overridable(({ credits, classes = styles }: AboutProps) => <>
    <div className={classes.about}>
        <div className={classes.credits}>
            {credits.map(credit => <div key={credit.name} className={classes.credit}>
                <div className={classes.icon}>
                    {credit.icon ? <img src={credit.icon} alt={credit.name} /> : <>&nbsp;&nbsp;{credit.name.charAt(0)}</>}
                </div>
                <h3>
                    <div className={classes.role}>{credit.role}</div>
                    <div className={classes.name}>{credit.name}</div>
                </h3>
                <p className={classes.info}>
                    <Snippet slug={credit.slug} />
                </p>
            </div>)}
        </div>
    </div>
</>);
