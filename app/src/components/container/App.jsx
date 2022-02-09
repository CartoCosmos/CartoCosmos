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

/**
 * App is the parent component for all of the other components in the project. It
 * imports and creates all of the map and console components and contains the
 * target selector.
 *
 * @component
 */
export default function App() {
  const [targetPlanet, setTargetPlanet] = React.useState("Mars");

  /**
   * Handles target selection
   *
   * @param {*} event selection event
   */
  const handleTargetBodyChange = value => {
    setTargetPlanet(value);
  };



  return (
    <div id="app-container">
      <div id="top-bar">
        <ConsoleContainer target={targetPlanet} bodyChange={handleTargetBodyChange}/>
      </div>
      <MapContainer target={targetPlanet} />
      <div id="bottom-bar">
        <WellKnownTextInput />
        <CreditsDisplay />
      </div>
      <div id="right-bar">
        <SearchAndFilterInput />
      </div>
    </div>
  );
}
