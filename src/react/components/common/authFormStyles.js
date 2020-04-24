import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const errorDivStyle = {
  height: "50px",
  width: "380px",
  backgroundColor: "#FF9494",
  borderRadius: "5px"
};

const successDivStyle = {
  height: "40px",
  width: "380px",
  backgroundColor: "lightgreen",
  borderRadius: "5px"
};

const errorMessageStyle = {
  color: "red",
  textAlign: "center",
  paddingTop: "10px"
};

const successMessageStyle = {
  color: "green",
  textAlign: "center",
  paddingTop: "10px"
};


export {
  useStyles,
  errorDivStyle,
  errorMessageStyle,
  successDivStyle,
  successMessageStyle
};
