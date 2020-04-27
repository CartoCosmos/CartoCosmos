import React from "react";
import ConsoleTargetInfo from "../presentational/ConsoleTargetInfo.jsx";
import ConsoleProjectionButtons from "../presentational/ConsoleProjectionButtons.jsx";
import ConsoleLonLatSelects from "../presentational/ConsoleLonLatSelects.jsx";
import ConsoleCoordinates from "./ConsoleCoordinates.jsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

/**
 * Controls css styling for this component using js to css
 */
const useStyles = makeStyles(theme => ({
  root: {
    height: 100,
    width: "100%"
  },
  appbar: {
    background: "#f8f9fa"
  },
  toolbar: {
    height: 100,
    maxWidth: 800,
    width: "auto",
    padding: 0
  },
  grid: {
    maxWidth: 800,
    height: 100
  }
}));

/**
 * Main component of the console, which arranges all subcomponents into a grid
 * and passes in target information via props.
 *
 * @component
 */
export default function ConsoleAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} id="consoleToolbarParent">
      <AppBar
        className={classes.appbar}
        variant="outlined"
        position="static"
        color="inherit"
        id="consoleToolbar"
      >
        <Toolbar className={classes.toolbar}>
          <Grid
            className={classes.grid}
            container
            justify="space-between"
            alignItems="stretch"
          >
            <ConsoleProjectionButtons />
            <Divider orientation="vertical" />
            <Grid container item direction="column" xs>
              <ConsoleTargetInfo target={props.target} />
              <Grid
                container
                item
                xs
                justify="space-around"
                alignItems="center"
                wrap="nowrap"
              >
                <ConsoleLonLatSelects />
                <ConsoleCoordinates />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
