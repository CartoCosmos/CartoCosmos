import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import { makeStyles, withStyles, fade } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    maxHeight: 100,
    height: 100,
    backgroundColor: "#f6f6f4",
    overflow: "hidden"
  },
  container: {
    padding: "0.2rem",
    height: 50,
    width: "75%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "auto"
  },
  textbox: {
    flex: "3 1 auto",
    paddingRight: "0.5rem"
  },
  button: {
    height: 40,
    backgroundColor: "#c2edce",
    width: "9rem",
    paddingLeft: "0.5rem",
    alignSelf: "center"
  },
  title: {
    padding: "0.2rem",
    fontSize: 18,
    fontWeight: 600
  }
}));

export default function WellKnownTextInput() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="subtitle1">
        Well-Known Text Input
      </Typography>
      <div className={classes.container}>
        <TextField
          className={classes.textbox}
          variant="outlined"
          label="Enter WKT String"
          id="wktTextBox"
          name="fname"
          type="text"
        />
        <Button variant="contained" className={classes.button} id="wktButton">
          Draw On Map
        </Button>
      </div>
    </div>
  );
}
