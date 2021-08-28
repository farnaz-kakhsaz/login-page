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
    width: "100%",
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: theme.shape.borderRadius + 15,
    backgroundColor: "white",
  },
  inputFocused: {},
}));
