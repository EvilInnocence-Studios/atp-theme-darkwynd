import { ArchivesHeader } from "@comic/components/ArchivesHeader";
import { CharacterPageHeader } from "@comic/components/CharactersPage/CharacterPageHeader";
import { PageHeader } from "@common/components/Page/PageHeader";

import { LoginFormComponent } from "@uac/components/LoginForm/LoginForm.component";
import loginFormStyles from "../components/LoginForm/LoginForm.module.scss";

// Custom site banner
LoginFormComponent.overrideStyles(loginFormStyles);

// Custom fancy header for the archives, CMS pages, and character page
ArchivesHeader.hide();

PageHeader.hide();

CharacterPageHeader.hide();
