import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  inputRoot: {
    "&:hover": {
      backgroundColor: "#fff",
    },
    "&$inputFocused": {
      backgroundColor: "#fff",
      borderColor: theme.palette.primary.main,
    },
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: theme.shape.borderRadius + 15,
    backgroundColor: "white",
    padding: theme.spacing(0, 1.5),
  },
  inputFocused: {},
  inputLabelRoot: {
    "&$inputLabelShrink": {
      transform: "translate(-25px, 10px) scale(0.75)",
      flip: false,
    },
    transform: "translate(-25px, 20px) scale(1)",
    flip: false,
  },
  inputLabelShrink: {},
}));
