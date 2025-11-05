import { HalfSkyscraperAd, WideSkyscraperAd } from "@comic/components/ComicAd";
import { LinkList } from "@common/components/LinkList";
import { Col, Row } from "antd";
import { FancyHeader } from "../FancyHeader";
import { ShadowBackground } from "../ShadowBackground";
import { LinksProps } from "./Links.d";
import styles from './Links.module.scss';

export const LinksComponent = ({}:LinksProps) => <>
    <FancyHeader text="Links" />
    <ShadowBackground>
        <Row>
            <Col xs={7} className={styles.leftAd}>
                <HalfSkyscraperAd code="VIusOQjhzh" />
            </Col>
            <Col xs={10}>
                <div className={styles.linksPage}>
                    <h2>Darkwynd Chronicles Webcomics</h2>
                    <LinkList id="darkwynd-links" />

                    <h2>Sync Webtoon</h2>
                    <LinkList id="sync-webtoon-links" />

                    <h2>Socials</h2>
                    <LinkList id="social-links" />
                </div>
            </Col>
            <Col xs={7} className={styles.rightAd}>
                <WideSkyscraperAd code="3QtYTqQ15U" />
            </Col>
        </Row>
    </ShadowBackground>
</>;
