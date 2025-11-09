import { ArchivesHeader } from "@comic/components/ArchivesHeader";
import { ArcView } from "@comic/components/ArcView";
import { CharactersPage } from "@comic/components/CharactersPage";
import { CharacterPageHeader } from "@comic/components/CharactersPage/CharacterPageHeader";
import { LatestPage } from "@comic/components/LatestPage";
import { Page } from "@comic/components/Page";
import { connectPageView } from "@comic/components/PageView/PageView.container";
import { PageComponent } from "@common/components/Page/Page.component";
import { PageHeader } from "@common/components/Page/PageHeader";
import { SocialLinks } from "@common/components/SocialLinks";
import { FancyHeader } from "@darkwynd/components/FancyHeader";
import { HeaderBanner as CustomBanner } from "@darkwynd/components/HeaderBanner";
import { ShadowBackground } from "@darkwynd/components/ShadowBackground";
import { Footer } from "@public/components/Layout/Footer";
import { HeaderBanner } from "@public/components/Layout/Header/HeaderBanner";
import { ProductPage } from "@store/components/ProductPage";

import { SearchResults } from "@store/components/ProductsPage/SearchResults";
import swooshL from "../components/swoosh-l.png";
import swooshR from "../components/swoosh-r.png";
import tormentDark from "../components/torment-dark.png";
import torment from "../components/torment.png";

// Custom site banner
HeaderBanner.override(CustomBanner);

Footer.override(({Original}) => <>
    <style>{`
        .footer-background {
            overflow: visible;
            pointer-events: none;
            > * {
                background-color: var(--bgColor);
                pointer-events: all;
            }
        }
        .footer-background:before {
            content: "";
            position: absolute;
            top: 16px;
            left: 0;
            background: url(${swooshL}) left bottom no-repeat, url(${swooshR}) right bottom no-repeat;
            background-size: 50% auto, 50% auto;
            padding-top: 190px;
            background-color: transparent;
            margin-top: -206px;
            width: 100%;
            z-index: 999;
        }
    `}</style>
    <div className="footer-background">
        <Original />
    </div>
</>);

// Custom fancy header and shadow background for the archives
ArchivesHeader.hide();
ArcView.override(({Original}) => <>
    <FancyHeader text="Archives" />
    <ShadowBackground>
        <Original />
    </ShadowBackground>
</>);

// Add torment image into social links
SocialLinks.override(({Original}) => <>
    <Original />
    <style>{`
        .torment-fade-wrap {
            position: relative;
            display: inline-block;
            padding-right: 64px;
            width: 100%;
            height: 128px;
        }
        .torment-fade-wrap img {
            position: absolute;
            right: 48px;
            width: 200px;
            height: auto;
        }
        .torment-fade-wrap .torment-dark {
            opacity: 0;
            transition: opacity 4000ms ease;
        }
        .torment-fade-wrap:hover .torment-dark {
            opacity: 1;
        }
    `}</style>
    <div style={{textAlign: 'right'}}>
        <div className="torment-fade-wrap" style={{marginTop: '8px'}}>
            <img src={torment} alt="Torment" />
            <img src={tormentDark} className="torment-dark" alt="Torment (dark)" />
        </div>
    </div>
</>);

// Add shadowed background and fancy header to CMS pages
PageComponent.override(({Original, page, notFound}) => <>
    <FancyHeader text={page?.title || (notFound  ? "404: Page Not Found" : "Loading...")} />
    <ShadowBackground>
        <Original />
    </ShadowBackground>
</>);
PageHeader.hide();

// Add shadowed background and fancy header to characters page
CharactersPage.override(({Original}) => <>
    <FancyHeader text="Characters" />
    <ShadowBackground>
        <Original />
    </ShadowBackground>
</>);
CharacterPageHeader.hide();

// Add shadowed background and fancy header to latest page
LatestPage.override(({Original}) => <>
    <FancyHeader text="Latest Page" />
    <ShadowBackground>
        <Original />
    </ShadowBackground>
</>);

// Add shadowed background and fancy header to individual comic pages
Page.override(connectPageView(({Original, page, pageNumber}: any) => <>
    <FancyHeader text={`Page ${pageNumber}: ${page?.name}`} />
    <ShadowBackground>
        <Original />
    </ShadowBackground>
</>));

ProductPage.override(({Original}) => <>
    <ShadowBackground>
        <div style={{marginTop: "-188px"}}>
            <Original />
        </div>
    </ShadowBackground>
</>);

SearchResults.override(({Original}) => <>
    <div style={{paddingBottom: "128px"}}>
        <Original />
    </div>
</>);