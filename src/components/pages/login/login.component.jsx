import Localization from "../../../localization";
// Components
import ContainerBase from "../../items/container-base/container-base";
import TypographyBase from "../../items/typography-base/typography-base";
import TextFieldBase from "../../items/text-field-base/text-field-base.component";
import InputWithAdornment from "../../input-with-adornment/input-with-adornment.component";
import ButtonBase from "../../items/button-base/button-base";
// Helper
import { useInputChange } from "../../../helper/useInputChange";
// Images
import WormImage from "../../../assets/images/worm.png";
import Logo from "../../../assets/images/logo-1.png";
// Styles
import { useStyles } from "./login.styles";
import { useState } from "react";

export default function Login() {
  const classes = useStyles();
  const [input, setInput, handleInputChange] = useInputChange({
    username: "",
    password: "",
  });
  const [showError, setShowError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowError(true);
  };

  return (
    <ContainerBase>
      <div className={classes.root}>
        <img src={Logo} className={classes.logoImage} alt="logo" />
        <img src={WormImage} className={classes.wormImage} alt="worm" />
        <TypographyBase variant="h6" className={classes.typographyFirst}>
          {Localization.login_page_title_1}
        </TypographyBase>
        <TypographyBase>{Localization.login_page_title_2}</TypographyBase>
        <form onSubmit={handleSubmit}>
          <TextFieldBase
            className={classes.textFieldUsername}
            value={input.username}
            name="username"
            variant="filled"
            onChange={handleInputChange}
            disableUnderline={true}
            dir="rtl"
            label={Localization.login_page_input_username_placeholder}
            helperText={
              showError && !input.username
                ? Localization.login_page_input_username_helper_text
                : ""
            }
            error={showError && !input.username ? true : false}
          />
          <InputWithAdornment
            value={input.password}
            name="password"
            onChange={handleInputChange}
            inputLabel={Localization.login_page_input_password_placeholder}
            helperText={
              showError && !input.password
                ? Localization.login_page_input_password_helper_text
                : ""
            }
            error={showError && !input.password ? true : false}
          />
          <div className={classes.subtitleOne}>
            <TypographyBase variant="subtitle2" display="inline">
              {Localization.login_page_subtitle_one}
            </TypographyBase>
            <TypographyBase
              variant="subtitle2"
              display="inline"
              color="primary"
            >
              {Localization.login_page_subtitle_one_blue}
            </TypographyBase>
          </div>
          <div className={classes.subtitleTwo}>
            <TypographyBase variant="subtitle2" display="inline">
              {Localization.login_page_subtitle_two}
            </TypographyBase>
            <TypographyBase
              variant="subtitle2"
              display="inline"
              color="primary"
            >
              {Localization.login_page_subtitle_two_blue}
            </TypographyBase>
          </div>
          <ButtonBase
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          >
            {Localization.login_page_submit_button}
          </ButtonBase>
        </form>
      </div>
    </ContainerBase>
  );
}
