import Localization from "../../../localization";
// Components
import ContainerBase from "../../items/container-base/container-base";
// Styles
import { useStyles } from "./login.styles";

export default function Login() {
  const classes = useStyles();
  return (
    <ContainerBase>
      <div className={classes.root}>
        <div>{Localization.login_page_title_1}</div>
        <div>{Localization.login_page_title_2}</div>
      </div>
    </ContainerBase>
  );
}
