import React from "react";
import ConsoleTargetInfo from "../presentational/ConsoleTargetInfo.jsx";
import ConsoleProjectionButtons from "../presentational/ConsoleProjectionButtons.jsx";
import ConsoleLonLatSelects from "../presentational/ConsoleLonLatSelects.jsx";
import ConsoleCoordinates from "./ConsoleCoordinates.jsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar"; // Not sure what this did?
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

/**
 * Controls css styling for this component using js to css
 */
const useStyles = makeStyles(theme => ({
  appbar: {
    background: "#f8f9fa"
  },
  toolbar: {
    padding: 0
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
    <AppBar
      className={classes.appbar}
      variant="outlined"
      position="static"
      color="inherit"
      id="consoleToolbar"
    >
        <div className="flexbar">
          <div className="flexbar-item">
            <ConsoleTargetInfo target={props.target} bodyChange={props.bodyChange} />
          </div>
          <Divider orientation="vertical" />
          <div className="flexbar-item">
            <ConsoleCoordinates />
          </div>
          <Divider orientation="vertical" />
          <div className="flexbar-item">
            <ConsoleProjectionButtons />
          </div>
          <Divider orientation="vertical" />
          <div className="flexbar-item">
            <ConsoleLonLatSelects />
          </div>
          
        </div>
    </AppBar>
  );
}
