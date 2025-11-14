import { BannerAd, HalfSkyscraperAd, WideSkyscraperAd } from "@comic/components/ComicAd";
import { BannerList } from "@common/components/BannerList";
import { LinkList } from "@common/components/LinkList";
import { Col, Row } from "antd";
import { FancyHeader } from "../FancyHeader";
import { ShadowBackground } from "../ShadowBackground";
import { LinksProps } from "./Links.d";
import styles from './Links.module.scss';

export const LinksComponent = ({}:LinksProps) => <>
    <FancyHeader text="Links" />
    <ShadowBackground hideLeftBottom hideRightBottom>
        <Row className={styles.linksPage}>
            <Col  xs={0} sm={7} className={styles.leftAd}>
                <BannerList tag="linksLeft" columns={1} /><br/>
                <HalfSkyscraperAd key={`left-ad-${Date.now()}`} code="VIusOQjhzh" />
            </Col>
            <Col xs={24} sm={10} className={styles.linkLists}>
                <h2>Darkwynd Chronicles Webcomics</h2>
                <LinkList id="darkwynd-links" />

                <h2>Sync Webtoon</h2>
                <LinkList id="sync-webtoon-links" />
                <BannerList tag="linksMobile" columns={1} />

                <h2>Socials</h2>
                <LinkList id="social-links" />
            </Col>
            <Col xs={0} sm={7} className={styles.rightAd}>
                <BannerList tag="linksRight" columns={1} /><br/>
                <WideSkyscraperAd key={`right-ad-${Date.now()}`} code="3QtYTqQ15U" />
            </Col>
            <Col xs={24} sm={0} className={styles.bottomAd}>
                <BannerAd key={`bottom-ad-${Date.now()}`} code="T5fg5kxu4G" />
            </Col>
        </Row>
    </ShadowBackground>
</>;
