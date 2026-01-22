import { ArchivesHeader } from "@comic/components/ArchivesHeader";
import { CharacterPageHeader } from "@comic/components/CharactersPage/CharacterPageHeader";
import { PageHeader } from "@common/components/Page/PageHeader";
import { ShadowBackground } from "@darkwynd/components/ShadowBackground";
import { ProductPage } from "@store/components/ProductPage";
import { SearchResults } from "@store/components/ProductsPage/SearchResults";

import { Cart } from "@store/components/Cart";
import { LoginFormComponent } from "@uac/components/LoginForm/LoginForm.component";
import { MyAccount } from "@uac/components/MyAccount";
import loginFormStyles from "../components/LoginForm/LoginForm.module.scss";

// Custom site banner
LoginFormComponent.overrideStyles(loginFormStyles);

// Custom fancy header and shadow background for the archives
ArchivesHeader.hide();

PageHeader.hide();

CharacterPageHeader.hide();

// ProductPage.override(({ Original }) => <>
//     <div style={{ marginTop: "-20px" }}>
//         <ShadowBackground hideLeftBottom hideRightBottom>
//             <div style={{ marginTop: "-128px" }} >
//                 <Original />
//             </div>
//         </ShadowBackground>
//     </div>
// </>);

SearchResults.override(({ Original }) => <>
    <div style={{ paddingBottom: "128px" }}>
        <Original />
    </div>
</>);

MyAccount.override(({ Original }) => <>
    <div style={{ paddingBottom: "256px" }}>
        <Original />
    </div>
</>);

Cart.override(({ Original }) => <>
    <div style={{ paddingBottom: "128px" }}>
        <Original />
    </div>
</>);
