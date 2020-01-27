import React from "react";
import ConsoleTargetInfo from "../presentational/ConsoleTargetInfo.jsx";
import ConsoleProjectionButtons from "../presentational/ConsoleProjectionButtons.jsx";
import ConsoleLonLatSelects from "../presentational/ConsoleLonLatSelects.jsx";
import Grid from "@material-ui/core/Grid";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    width: 800,
    height: 100
  },
  paper: {
    padding: theme.spacing(0.5),
    maxWidth: "100%",
    maxHeight: "100%",
    background: "#DCEED1",
    background: "linear-gradient(to right, #E2E2E2, #DCEED1)",
    background: "linear-gradient(to right, #E2E2E2, #DCEED1)"
  }
}));

export default function ConsoleContainer(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={10} className={classes.paper}>
        <Grid container spacing={0}>
          <Grid container item xs direction="column" alignItems="flex-start">
            <ConsoleProjectionButtons />
          </Grid>
          <Grid container item direction="column" xs alignItems="center">
            <ConsoleTargetInfo targetName="Mars" />
          </Grid>
          <Grid container item direction="column" xs alignItems="flex-end">
            <ConsoleLonLatSelects />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
