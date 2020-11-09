import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import ConsoleContainer from "./ConsoleContainer.jsx";
import MapContainer from "./MapContainer.jsx";
import ListSubheader from "@material-ui/core/ListSubheader";
import WellKnownTextInput from "../presentational/WellKnownTextInput.jsx";
import CreditsDisplay from "../presentational/CreditsDisplay.jsx";

/**
 * Controls css styling for this component using js to css
 */
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignContent: "center",
    justifyContent: "space-between"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 125
  },
  autoComplete: {}
}));

/**
 * App is the parent component for all of the other components in the project. It
 * imports and creates all of the map and console components and contains the
 * target selector.
 *
 * @component
 */
export default function App() {
  const classes = useStyles();
  let targetName = document.getElementById("mercury_id");

  return (
    <div>
      <Paper elevation={10}>
        <ConsoleContainer target={targetName.innerText} />
        <MapContainer target={targetName.innerText} />
        <WellKnownTextInput />
        <CreditsDisplay />
      </Paper>
    </div>
  );
}
