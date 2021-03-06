import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
// Styles
import { useStyles } from "./text-field-base.styles";

export default function TextFieldBase({
  variant,
  label,
  type,
  name,
  value,
  onChange,
  error,
  helperText,
  disableUnderline,
  startAdornment,
  endAdornment,
  dir,
  ...rest
}) {
  const classes = useStyles();

  return (
    <TextField
      variant={variant}
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      helperText={helperText}
      error={error}
      fullWidth
      {...rest}
      inputProps={{ dir, name }}
      InputProps={{
        classes: {
          root: classes.inputRoot,
          focused: classes.inputFocused,
        },
        disableUnderline: disableUnderline,
        startAdornment: startAdornment,
        endAdornment: endAdornment,
      }}
      InputLabelProps={{
        classes: {
          root: classes.inputLabelRoot,
          shrink: classes.inputLabelShrink,
        },
      }}
    />
  );
}

TextFieldBase.propTypes = {
  variant: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  disableUnderline: PropTypes.bool,
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
  dir: PropTypes.string.isRequired,
  rest: PropTypes.any,
};
