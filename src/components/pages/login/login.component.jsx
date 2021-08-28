import Localization from "../../../localization";
// Components
import ContainerBase from "../../items/container-base/container-base";
import TypographyBase from "../../items/typography-base/typography-base";
import TextFieldBase from "../../items/text-field-base/text-field-base.component";
import InputWithAdornment from "../../input-with-adornment/input-with-adornment.component";
// Helper
import { useInputChange } from "../../../helper/useInputChange";
// Styles
import { useStyles } from "./login.styles";

export default function Login() {
  const classes = useStyles();
  const [input, setInput, handleInputChange] = useInputChange({
    username: "",
    password: "",
  });

  return (
    <ContainerBase>
      <div className={classes.root}>
        <TypographyBase>{Localization.login_page_title_1}</TypographyBase>
        <TypographyBase>{Localization.login_page_title_2}</TypographyBase>
        <TextFieldBase
          value={input.username}
          name="username"
          variant="filled"
          onChange={handleInputChange}
          disableUnderline={true}
          dir="rtl"
          label={Localization.login_page_input_username_placeholder}
        />
        <InputWithAdornment
          value={input.password}
          name="password"
          onChange={handleInputChange}
          inputLabel={Localization.login_page_input_password_placeholder}
        />
      </div>
    </ContainerBase>
  );
}
