import React from "react";
import ConsoleTargetInfo from "../presentational/ConsoleTargetInfo.jsx";
import ConsoleProjectionButtons from "../presentational/ConsoleProjectionButtons.jsx";
import ConsoleLonLatSelects from "../presentational/ConsoleLonLatSelects.jsx";
import ConsoleCoordinates from "./ConsoleCoordinates.jsx";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";

/**
 * Controls css styling for this component using js to css
 */
let css = {
  appbar: {
    background: "#f8f9fa"
  }
};

/**
 * Main component of the console, which arranges all subcomponents into a grid
 * and passes in target information via props.
 *
 * @component
 */
export default function ConsoleAppBar(props) {

  return (
    <AppBar
      sx={css.appbar}
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
