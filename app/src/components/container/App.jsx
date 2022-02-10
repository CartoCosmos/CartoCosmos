import React from "react";
import ConsoleAppBar from "../presentational/ConsoleAppBar.jsx";
import MapContainer from "./MapContainer.jsx";
import WellKnownTextInput from "../presentational/WellKnownTextInput.jsx";
import StacQueryConsole from "../presentational/StacQueryConsole.jsx";
import CreditsDisplay from "../presentational/CreditsDisplay.jsx";
import SearchAndFilterInput from "../presentational/SearchAndFilterInput.jsx";

/**
 * App is the parent component for all of the other components in the project. It
 * imports and creates all of the map and console components and contains the
 * target selector.
 *
 * @component
 */
export default function App() {
  const [targetPlanet, setTargetPlanet] = React.useState("Mars");
  const [showSortBar, setShowSortBar] = React.useState(true);

  const ShowHideSort = () => {
    setShowSortBar(!showSortBar);
  }

  /**
   * Handles target body selection
   * @param {*} value selection event
   */
  const handleTargetBodyChange = value => {
    setTargetPlanet(value);
  };

  return (
    <div id="app-container">
      <div id="main-column">
        <div id="top-bar">
          <ConsoleAppBar target={targetPlanet} bodyChange={handleTargetBodyChange}  />
        </div>
        <MapContainer target={targetPlanet} />
        <div id="bottom-bar">
          <WellKnownTextInput />
          <StacQueryConsole />
          <CreditsDisplay />
        </div>
      </div>
      <div id="right-bar">  
        <div id="sort-filter-collapsed" onClick={ShowHideSort}>Sort and Filter</div>
        { showSortBar ? <SearchAndFilterInput /> : null }
      </div>
    </div>
  );
}
