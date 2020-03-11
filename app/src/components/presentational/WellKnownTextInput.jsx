import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles, fade } from "@material-ui/core/styles";

/**
 * Controls css styling for this component using js to css
 */
const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    maxHeight: 100,
    height: 100,
    backgroundColor: "#f8f9fa",
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
    backgroundColor: "#e9ecef",
    "&:focus": {
      borderColor: "#1971c2"
    }
  },
  button: {
    height: 40,
    color: "#fff",
    backgroundColor: "#1971c2",
    width: "9rem",
    marginLeft: "1rem",
    alignSelf: "center",
    "&:hover": {
      backgroundColor: fade("#1971c2", 0.7)
    }
  },
  title: {
    padding: "0.2rem",
    color: "#343a40",
    fontSize: 18,
    fontWeight: 600
  }
}));

/**
 * Component that accepts user input of Well-Known Text
 *
 * @component
 * @example
 * <WellKnownTextInput />
 *
 */
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
          autoComplete="off"
        />
        <Button variant="contained" className={classes.button} id="wktButton">
          Draw On Map
        </Button>
      </div>
    </div>
  );
}
