import React from "react";
import ConsoleTargetInfo from "../presentational/ConsoleTargetInfo.jsx";
import ConsoleProjectionButtons from "../presentational/ConsoleProjectionButtons.jsx";
import ConsoleLonLatSelects from "../presentational/ConsoleLonLatSelects.jsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: 100,
    width: "100%"
  },
  appbar: {
    background: "#f5dd95",
    background: "-webkit-linear-gradient(to right, #f5dd95, #faf5e6)",
    background: "linear-gradient(to right, #f5dd95, #faf5e6)"
  },
  toolbar: {
    height: "100%",
    maxWidth: 800,
    width: "auto",
    padding: 0
  },
  grid: {
    maxWidth: 800,
    height: 100
  }
}));

export default function ConsoleAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static" color="inherit">
        <Toolbar className={classes.toolbar}>
          <Grid className={classes.grid} container>
            <ConsoleProjectionButtons />
            <ConsoleTargetInfo targetName="Mars" />
            <ConsoleLonLatSelects />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
