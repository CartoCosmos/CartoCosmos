import React from "react";
import ConsoleTargetInfo from "../presentational/ConsoleTargetInfo.jsx";
import ConsoleProjectionButtons from "../presentational/ConsoleProjectionButtons.jsx";
import ConsoleLonLatSelects from "../presentational/ConsoleLonLatSelects.jsx";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    width: 800,
    height: 100,
    padding: theme.spacing(0.75)
  },
  paper: {
    maxWidth: "100%",
    maxHeight: 100,
    background: "#DCEED1",
    background: "linear-gradient(to right, #E2E2E2, #DCEED1)",
    background: "linear-gradient(to right, #E2E2E2, #DCEED1)"
  },
  grid: {
    maxHeight: 100,
    width: "inherit"
  }
}));

export default function ConsoleContainer(props) {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Paper elevation={10} className={classes.paper}>
        <Grid container justify="space-evenly" spacing={1}>
          <Grid
            className={classes.grid}
            container
            item
            xs={1}
            justify="space-evenly"
            direction="column"
            alignItems="flex-start"
          >
            <ConsoleProjectionButtons />
          </Grid>
          <Grid
            container
            item
            justify="space-evenly"
            direction="column"
            className={classes.grid}
            xs={3}
            alignItems="center"
          >
            <ConsoleTargetInfo targetName="Mars" />
          </Grid>
          <Grid
            container
            item
            className={classes.grid}
            xs={7}
            justify="space-evenly"
            alignItems="flex-end"
            spacing={1}
          >
            <ConsoleLonLatSelects />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
