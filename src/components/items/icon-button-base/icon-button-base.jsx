import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";

export default function IconButtonBase({
  children,
  ariaLabel,
  onClick,
  edge,
  ...rest
}) {
  return (
    <IconButton aria-label={ariaLabel} onClick={onClick} edge={edge} {...rest}>
      {children}
    </IconButton>
  );
}

IconButtonBase.propTypes = {
  children: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  edge: PropTypes.string.isRequired,
  rest: PropTypes.any,
};
