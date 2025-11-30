import { ITheme } from "@core/lib/layout/layout";

const globalCss = `
    body {
        margin: 0 !important;
        padding: 0 !important;
        width: 100%;
        overflow-x: hidden;
        background-color: var(--pageBg);
        * {
            font-family: var(--defaultFont);
        }
        h1, h2, h3, h4 {
            font-family: var(--headerFont);
        }
    }

    .app {
        background-color: var(--bgColor);
        width: var(--maxSiteWidth);
        margin: auto;
        min-height: 100vh;
    }

    a {
        color: var(--linkColor);
        text-decoration: none;
        &:hover {
            text-decoration: none;
        }
        &.altLink {
            color: var(--altLinkColor);
        }
    }
`;

const topMenuCss = `
    .topMenu {
        display: flex;
        list-style-type: none;
        margin: 0;
        padding: 28px 0 var(--padding) 0;
        width: 100%;
        background-color: var(--headerMenuBg);
    }
    .topMenu > * {
        width: 20%;
        text-align: center;
        font-size: var(--textSizeLarge);
        text-transform: uppercase;
        font-weight: bold;
    }
    .topMenu a {
        color: var(--altLinkColor);
        @media (max-width:450px) {
            font-size: small;
        }
        @media (max-width: 250px) {
            font-size: x-small;
        }
    }
    .topMenu .subMenu {
        position: absolute;
        top: 100%;
        right: 0;
        max-width: 100%;
        min-width: 256px;
        border: solid 3px var(--borderColor);
        background-color: var(--bgColor);
        z-index: 40;
        list-style: none;
        margin: 0;
        padding: 0;
        li {
            padding: 0.5rem;
            a {
                color: var(--linkColor);
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`;

const pageHeaderCss = `
    .pageHeader {
        background-color: var(--bgColor);
        box-shadow: 0 0 20px var(--primaryColor);
        margin-bottom: 20px;
    }
    .pageHeader .links {
        padding: var(--padding);
    }
    .pageHeader .search {
        padding: var(--padding);
    }
    .pageHeader .account {
        padding: var(--paddingSmall);
        color: var(--secondaryColor);
        text-align: right;
        font-weight: bold;
    }
    .pageHeader .account > * {
        display: inline-block;
    }
    .pageHeader .loginBtn {
        margin: var(--padding);
    }
    .pageHeader .cartBtn {
        vertical-align: top;
        padding-top: 12px;
        font-size: x-large;
    }
`;

const bannerCss = `
.darkwyndBanner {
    width: 100%;
    text-align: center;
    height: 200px;
    position: relative;
    background: url(https://media.darkwyndchronicles.com/media/images/banner-gradient.png) center, url(https://media.darkwyndchronicles.com/media/images/banner-bg.png) center;
    @media (max-width: 282px) {
        height: 71vw;
    }
}
.darkwyndBanner img {
    position: absolute;
    right: 16px;
    top: 22px;
    @media (max-width: 282px) {
        right: 50%;
        transform: translateX(50%);
        width: calc(100% - 32px);
    }
}
`;

const footerBgCss = `
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
        background: url(https://media.darkwyndchronicles.com/media/images/swoosh-l.png) left bottom no-repeat, url(https://media.darkwyndchronicles.com/media/images/swoosh-r.png) right bottom no-repeat;
        background-size: 50% auto, 50% auto;
        padding-top: 190px;
        background-color: transparent;
        margin-top: -206px;
        width: 100%;
        z-index: 999;
    }
`;

const footerRowCss = `
.footer {
    display: flex;
    padding: 0 var(--padding) !important;
    justify-content: space-between;
    :global(.socialLinks) {
        > a {display: block;}
    }
    a {
        color: var(--altLinkColor) !important;
    }
}`;

const socialLinksContainerCss = `
    .footer .socialLinksContainer {
        margin-top: 22px;
        text-align: right;
    }
`;

const footerLinksCss = `
    .footerLinks ul {
        list-style-type: none;
        padding: 0;
        columns: 4;
        width: 100%;
        @media (max-width: 1430px) {
            columns: 3;
        }
        @media (max-width: 1070px) {
            columns: 2;
        }
        @media (max-width: 790px) {
            columns: 1;
            width: auto;
        }
        @media (max-width: 575px) {
            columns: 3;
        }
        @media (max-width: 475px) {
            columns: 2;
        }
        @media (max-width: 300px) {
            columns: 1;
            width: auto;
        }
    }
    .footerLinks ul li {
        display: block;
        padding: var(--padding);
        font-size: 16px;
        width: 33%;
        white-space: nowrap;
    }
    .footerLinks ul li a {
        text-decoration: none;
        color: var(--primaryColor);
    }
    .footerLinks ul li a:hover {
        color: var(--secondaryColor);
    }
}`;

const newsLetterCss = `
    .newsletter {
        padding-top: 8px;
    }
    .newsletter input {
            width: 100%;
            padding: var(--paddingSmall);
            border: 2px solid var(--borderColor);
            border-radius: 4px;
            font-size: 16px;
            margin-bottom: var(--paddingSmall);
    }
    .newsletter button {
        background-color: var(--primaryColor);
        color: #ffffff;
        border: 4px solid var(--primaryColor);
        border-radius: var(--borderRadiusLarge);
        padding: var(--paddingSmall) var(--padding);
        font-size: var(--textSizeDefault);
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.5s ease, color 0.5s ease, border 0.5s ease;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
        width: 100%;
    }
    .newsletter button:hover {
            background-color: var(--bgColor);
            transition: background-color 0.5s ease, color 0.5s ease, border 0.5s ease;
        }
    }
}`;

const tormentCss = `
    .torment-fade-wrap {
        margin-top: 8px;
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
`;

const newsFeedCss = `
    .newsFeed {
        border: solid 10px var(--borderColor);
        background-color: var(--bgLightColor);
        border-radius: var(--borderRadius);
        overflow-y: auto;
        max-height: 1700px;
        margin: var(--padding);
        background-color: var(--bgLightColor);
        scrollbar-width: thin;
        scrollbar-color: var(--bgColor) var(--bgLightColor);
        @media (max-width: 767px) {
            max-height: auto;
            margin-bottom: 64px;
        }
    }
    .newsFeed h1 {
        background-color: var(--bgColor);
        padding: var(--padding);
        margin: -16px -16px 16px -16px;
    }
    .newsFeed h2 {
        background-color: var(--bgColor);
        margin-top: 0;
        padding: var(--padding);
    }
    .newsFeed .feed {
        padding: var(--padding);
    }
`;

const homepageFeaturedProductsCss = `
    .homepageFeaturedProducts {
        border: 2px solid var(--borderColor);
        background: var(--bgColor);
    }
`;

export const DarkwyndLayoutConfig: ITheme = {
    name: "standard",
    routes: {
        "/": "default"
    },
    css: globalCss,
    layouts: {
        default: {
            component: "StandardLayout",
            slots: {
                header: [
                    { component: "MailchimpPopup"},
                    { component: "LogoSpinner"},
                    {
                        component: "Div",
                        props: { className: "darkwyndBanner" },
                        css: bannerCss,
                        slots: {
                            children: [
                                { component: "Img", props: { src: "https://media.darkwyndchronicles.com/media/images/banner-logo.png" } }
                            ]
                        }
                    },
                    { component: "LinkList", props: { id: "top", className: "topMenu" }, css: topMenuCss },
                    {
                        "/products,/products/*,/cart,/my-account,/my-account/*": [
                            {
                                component: "Row",
                                props: { className: "pageHeader" },
                                css: pageHeaderCss,
                                slots: {
                                    children: [
                                        {
                                            component: "Col",
                                            props: { xs: 16, lg: { span: 6, push: 9 }, className: "search" },
                                            slots: {
                                                children: [
                                                    { component: "ProductSearchInput" }
                                                ]
                                            }
                                        },
                                        {
                                            component: "Col",
                                            props: { xs: 8, lg: { span: 9, push: 9 }, className: "account" },
                                            slots: {
                                                children: [
                                                    { component: "AccountMenu" },
                                                    { component: "CartBtn" }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ],
                content: [{
                    "/comic/arc/*,/comic/arc": [
                        { component: "FancyHeader", props: { text: "Archives" } },
                        { component: "ShadowBackground", slots: { children: [{ component: "Content" }] } }
                    ],
                    "/comic/page/*": [
                        { component: "FancyHeader" },
                        {
                            component: "ShadowBackground", slots: {
                                children: [
                                    { component: "Content" },
                                    { component: "Div", props: { style: { width: "100%", height: "128px" } } }
                                ]
                            }
                        },
                    ],
                    "/comic/characters,/comic/characters/*": [
                        { component: "FancyHeader", props: { text: "Characters" } },
                        { component: "ShadowBackground", slots: { children: [{ component: "Content" }] } }
                    ],
                    "/products,/products/*,/cart,/my-account,/my-account/*": [
                        { component: "Content" }
                    ],
                    "/": [
                        { component: "FancyHeader", props: { text: "Latest Page" } },
                        { component: "ShadowBackground", slots: { children: [
                            { component: "Row", slots: { children: [
                                {
                                    component: "Col",
                                    props: { xs: 24, md: 18, xl: { span: 16, push: 4 } },
                                    slots: { children: [
                                        { component: "LatestPage" },
                                        {
                                            component: "NewProducts",
                                            props: { title: "Get the Books!", hideCartButton: true, className: "homepageFeaturedProducts" },
                                            css: homepageFeaturedProductsCss,
                                        },
                                        { component: "Div", props: { style: { width: "100%", height: "128px" } } }
                                    ] } },
                                {
                                    component: "Col",
                                    props: { xs: 24, md: 6, xl: { span: 4, push: 4 } },
                                    css: newsFeedCss,
                                    slots: { children: [
                                        { component: "Div", props: {className: "newsFeed"}, css: newsFeedCss, slots: {
                                            children: [
                                                { component: "H2", props: { children: "News Feed" } },
                                                { component: "BlueSkyFeed", props: { pageSize: 5 } }
                                            ]
                                        }}
                                    ] }
                                }
                            ]}}
                        ] } }
                    ],
                    "/*": [
                        { component: "FancyHeader" },
                        { component: "ShadowBackground", slots: { children: [{ component: "Content" }] } }
                    ],
                    "*": [{
                        component: "Content"
                    }]
                }],
                footer: [{
                    component: "Div",
                    props: { className: "footer-background" },
                    css: footerBgCss,
                    slots: {
                        children: [
                            {
                                component: "Row",
                                props: { gutter: 16, className: "footer" },
                                css: footerRowCss,
                                slots: {
                                    children: [
                                        {
                                            component: "Col",
                                            props: { xs: 24, sm: 6, className: "socialLinksContainer" },
                                            css: socialLinksContainerCss,
                                            slots: {
                                                children: [
                                                    { component: "SocialLinks" },
                                                    {
                                                        component: "Div",
                                                        props: { style: { textAlign: "right" } },
                                                        slots: {
                                                            children: [{
                                                                component: "Div",
                                                                props: { className: "torment-fade-wrap" },
                                                                css: tormentCss,
                                                                slots: {
                                                                    children: [
                                                                        { component: "Img", props: { src: "https://media.darkwyndchronicles.com/media/images/torment.png" } },
                                                                        { component: "Img", props: { src: "https://media.darkwyndchronicles.com/media/images/torment-dark.png", className: "torment-dark" } }
                                                                    ]
                                                                }
                                                            }]
                                                        }
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            component: "Col",
                                            props: { xs: 24, sm: 9, lg: 12, className: "footerLinks" },
                                            css: footerLinksCss,
                                            slots: {
                                                children: [
                                                    { component: "LinkList", props: { id: "footer" } }
                                                ]
                                            }
                                        },
                                        {
                                            component: "Col",
                                            props: { xs: 24, sm: 6, className: "newsletter" },
                                            css: newsLetterCss,
                                            slots: {
                                                children: [
                                                    { component: "MailchimpForm" }
                                                ]
                                            }
                                        },
                                        {
                                            component: "Col",
                                            props: { xs: 24, style: { textAlign: "center" } },
                                            slots: {
                                                children: [
                                                    { component: "Copyright" }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }]
            }
        }
    }
}
