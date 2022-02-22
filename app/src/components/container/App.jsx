import React from "react";
import ConsoleAppBar from "../presentational/ConsoleAppBar.jsx";
import MapContainer from "./MapContainer.jsx";
import QueryConsole from "../presentational/QueryConsole.jsx";
import CreditsDisplay from "../presentational/CreditsDisplay.jsx";
import SearchAndFilterInput from "../presentational/SearchAndFilterInput.jsx";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import GeoTiffViewer from "./geoTiffViewer";
//import GeoTiffViewer from "../../js/geoTIffViewer";

const css = {
  shown: {
    display: "block",
    background: "#f8f9fa"
  },
  hidden: {
    display: "none"
  }
};

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
  const [sortBarStyle, setSortBarStyle] = React.useState(css.hidden);
  const geoTiffViewer = new GeoTiffViewer("geoTiff-Container");

  const ShowHideSort = () => {
    setShowSortBar(!showSortBar);
    setSortBarStyle(showSortBar ? css.shown : css.hidden);
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
          <div style={sortBarStyle}>
            <SearchAndFilterInput target={targetPlanet}/>
          </div>
      </div>

      <div id="geoTiff-Container">
        <Container>
          <AppBar position="relative">
            <Container>
              <Typography 
                variant="h6"
                id="geoTiff-Asset-name"
                noWrap
                component="div"
                align="center"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >
                  Displayed GeoTiff
                </Typography>
                <button onClick={geoTiffViewer.toggleViewer()} 
                id="geoTiffClose">
                  CLOSE
                </button>
            </Container>
          </AppBar>
          <div id = "geoTiff-Asset">
          </div>
          <AppBar position="relative">
            <Container>
              <button id="download-button">Download Asset</button>
            </Container>
          </AppBar>
        </Container>
      </div>
    </div>
  );
}
