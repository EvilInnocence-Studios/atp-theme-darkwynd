import { Snippet } from "@common/components/Snippet";
import { FancyHeader } from "../FancyHeader";
import { AboutProps } from "./About.d";
import styles from './About.module.scss';
import { ShadowBackground } from "../ShadowBackground";

export const AboutComponent = ({credits}:AboutProps) => <>
    <FancyHeader text="About Us" />
    <ShadowBackground>
        <div className={styles.about}>
            <div className={styles.credits}>
                {credits.map(credit => <div key={credit.name} className={styles.credit}>
                    <div className={styles.icon}>
                        {credit.icon ? <img src={credit.icon} alt={credit.name} /> : <>&nbsp;&nbsp;{credit.name.charAt(0)}</>}
                    </div>
                    <h3>
                        <div className={styles.role}>{credit.role}</div>
                        <div className={styles.name}>{credit.name}</div>
                    </h3>
                    <p className={styles.info}>
                        <Snippet slug={credit.slug} />
                    </p>
                </div>)}
            </div>
        </div>
    </ShadowBackground>
</>;
