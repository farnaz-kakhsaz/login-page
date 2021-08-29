import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: theme.spacing(45),
    margin: "auto",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  typographyFirst: {
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: theme.spacing(1),
  },
  textFieldUsername: {
    margin: theme.spacing(2, 0),
  },
  subtitleOne: {
    "& :last-child": {
      "&:hover": {
        textDecoration: "underline",
        color: theme.palette.primary.dark,
        cursor: "pointer",
      },
      transition: "all 0.2s ease-in-out",
      marginRight: theme.spacing(1.5),
      flip: false,
    },
    margin: theme.spacing(3, 0, 0),
  },
  subtitleTwo: {
    "& :last-child": {
      "&:hover": {
        textDecoration: "underline",
        color: theme.palette.primary.dark,
        cursor: "pointer",
      },
      transition: "all 0.2s ease-in-out",
      marginRight: theme.spacing(1.5),
      flip: false,
    },
    margin: theme.spacing(1, 0, 3),
  },
  button: {
    borderRadius: theme.shape.borderRadius + 15,
    height: theme.spacing(7),
    fontSize: theme.typography.fontSize + 2,
  },
}));
