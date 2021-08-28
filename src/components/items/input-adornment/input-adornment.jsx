import InputAdornment from "@material-ui/core/InputAdornment";
import PropTypes from "prop-types";

export default function InputAdornmentBase({ children, position, ...rest }) {
  return (
    <InputAdornment position={position} {...rest}>
      {children}
    </InputAdornment>
  );
}

InputAdornmentBase.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.string.isRequired,
  rest: PropTypes.any,
};
