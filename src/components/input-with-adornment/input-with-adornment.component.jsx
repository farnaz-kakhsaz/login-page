import { useState } from "react";
import PropTypes from "prop-types";
// Component
import InputAdornmentBase from "../items/input-adornment/input-adornment";
import IconButtonBase from "../items/icon-button-base/icon-button-base";
import TextFieldBase from "../items/text-field-base/text-field-base.component";
// Icons
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
// Styles
import { useStyles } from "./input-with-adornment.styles";

export default function InputWithAdornment({
  value,
  inputLabel,
  onChange,
  ...rest
}) {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState();

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <TextFieldBase
      label={inputLabel}
      variant="filled"
      value={value}
      onChange={onChange}
      type={showPassword ? "text" : "password"}
      disableUnderline={true}
      dir="rtl"
      {...rest}
      endAdornment={
        <InputAdornmentBase position="end" className={classes.inputAdornment}>
          <IconButtonBase
            ariaLabel="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButtonBase>
        </InputAdornmentBase>
      }
    />
  );
}

InputWithAdornment.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  inputLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  rest: PropTypes.any,
};
