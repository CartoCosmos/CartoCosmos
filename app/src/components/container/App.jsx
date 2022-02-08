import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ConsoleContainer from "./ConsoleContainer.jsx";
import MapContainer from "./MapContainer.jsx";
import WellKnownTextInput from "../presentational/WellKnownTextInput.jsx";
import CreditsDisplay from "../presentational/CreditsDisplay.jsx";
import SearchAndFilterInput from "../presentational/SearchAndFilterInput.jsx";

/**
 * Controls css styling for this component using js to css
 */
const useStyles = makeStyles(theme => ({
  appPaper: {
    display: "flex",
    flexDirection: "row"
  },
  rightSidebar: {
    border: `1px solid ${theme.palette.divider}`
  },
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
  const [targetPlanet, setTargetPlanet] = React.useState("Mars");

  /**
   * Handles target selection
   *
   * @param {*} event selection event
   */
  const handleTargetBodyChange = event => {
    setTargetPlanet(event.target.value);
  };



  return (
    <div className={classes.appPaper}>
      <div>
        <ConsoleContainer target={targetPlanet} bodyChange={handleTargetBodyChange}/>
        <MapContainer target={targetPlanet} />
        <WellKnownTextInput />
        <CreditsDisplay />
      </div>
      <div className={classes.rightSidebar}>
        
        <SearchAndFilterInput />
      </div>
    </div>
  );
}
