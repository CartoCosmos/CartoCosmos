import React from "react";
import ConsoleAppBar from "../presentational/ConsoleAppBar.jsx";
import MapContainer from "./MapContainer.jsx";
import QueryConsole from "../presentational/QueryConsole.jsx";
import CreditsDisplay from "../presentational/CreditsDisplay.jsx";
import SearchAndFilterInput from "../presentational/SearchAndFilterInput.jsx";
import { makeStyles } from "@material-ui/core/styles";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const useStyles = makeStyles(theme => ({
  shown: {
    display: "block",
    background: "#f8f9fa"
  },
  hidden: {
    display: "none"
  }
}))

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
  const [showSortBar, setShowSortBar] = React.useState(true);
  const [sortBarStyle, setSortBarStyle] = React.useState(classes.hidden);

  const ShowHideSort = () => {
    setShowSortBar(!showSortBar);
    setSortBarStyle(showSortBar ? classes.shown : classes.hidden);
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
          <QueryConsole />
          <CreditsDisplay />
        </div>
      </div>
      <div id="right-bar">  
        <div id="sort-filter-collapsed" onClick={ShowHideSort} >
          <ArrowLeftIcon/>
          Sort and Filter
          <ArrowLeftIcon/>
        </div>
          <div className={sortBarStyle}>
            <SearchAndFilterInput />
            {/* instead of styled surrounding div: { showSortBar ? <SearchAndFilterInput /> : null } 
                ^ simpler but might break things if another part of the program is looking for it and it's not there? */}
          </div> 
      </div>
    </div>
  );
}
