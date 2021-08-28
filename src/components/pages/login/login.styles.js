import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    direction: "rtl",
    maxWidth: theme.spacing(55),
    margin: "auto",
    textAlign: "center",
  },
}));
