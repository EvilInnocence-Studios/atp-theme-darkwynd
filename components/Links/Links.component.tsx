import { BannerAd, HalfSkyscraperAd, WideSkyscraperAd } from "@comicad/components/ComicAd";
import { BannerList } from "@common/components/BannerList";
import { LinkList } from "@common/components/LinkList";
import { overridable } from "@core/lib/overridable";
import { Col, Row } from "antd";
import { LinksProps } from "./Links.d";
import styles from './Links.module.scss';

export const LinksComponent = overridable(({ classes = styles }: LinksProps) => <>
    <Row className={classes.linksPage}>
        <Col xs={0} sm={7} className={classes.leftAd}>
            <BannerList tag="linksLeft" columns={1} /><br />
            <HalfSkyscraperAd key={`left-ad-${Date.now()}`} code="VIusOQjhzh" />
        </Col>
        <Col xs={24} sm={10} className={classes.linkLists}>
            <h2>Darkwynd Chronicles Webcomics</h2>
            <LinkList id="darkwynd-links" />

            <h2>Sync Webtoon</h2>
            <LinkList id="sync-webtoon-links" />
            <BannerList tag="linksMobile" columns={1} />

            <h2>Socials</h2>
            <LinkList id="social-links" />
        </Col>
        <Col xs={0} sm={7} className={classes.rightAd}>
            <BannerList tag="linksRight" columns={1} /><br />
            <WideSkyscraperAd key={`right-ad-${Date.now()}`} code="3QtYTqQ15U" />
        </Col>
        <Col xs={24} className={classes.bottomAd}>
            <BannerAd key={`bottom-ad-${Date.now()}`} code="T5fg5kxu4G" />
        </Col>
    </Row>
</>);
