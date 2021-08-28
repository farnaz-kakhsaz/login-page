import Localization from "../../../localization";
// Components
import ContainerBase from "../../items/container-base/container-base";
import TypographyBase from "../../items/typography-base/typography-base";
// Styles
import { useStyles } from "./login.styles";

export default function Login() {
  const classes = useStyles();
  return (
    <ContainerBase>
      <div className={classes.root}>
        <TypographyBase>{Localization.login_page_title_1}</TypographyBase>
        <TypographyBase>{Localization.login_page_title_2}</TypographyBase>
      </div>
    </ContainerBase>
  );
}
