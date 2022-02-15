import React from "react";
import { alpha } from "@mui/material/styles";
import Zoom from "@mui/material/Zoom";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import AddBoxIcon from "@mui/icons-material/AddBoxOutlined";
import ExposureIcon from "@mui/icons-material/Exposure";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";

/**
 * Controls css styling for this component using js to css
 */
 let css = {
  grid: {
    width: 600,
    height: "100%",
    maxHeight: 55
  },
  flip: {
    transform: "scaleY(-1)"
  },
  oval: {
    width: 16,
    height: 10,
    borderRadius: "50%",
    border: "2px solid",
    background: "transparent",
    marginBottom: 2,
    marginRight: 3
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    border: "2px solid",
    background: "transparent",
    marginBottom: 2,
    marginRight: 3
  },
  buttonText: {
    fontSize: 13
  },
  paper: {
    display: "flex",
    border: `1px solid` & alpha("#1971c2", 0.7),
    flexWrap: "wrap",
    backgroundColor: alpha("#1971c2", 0.7)
  },
};



/**
 * Main component which controls and displays the console's longitude and latitude
 * selectors and handles user click events.
 *
 * @component
 */
export default function ConsoleLonLatSelects() {
  const [posEastWest, setPosEastWest] = React.useState("PositiveEast");
  const [coordSystem, setCoordSystem] = React.useState("Planetocentric");
  const [lonRange, setLonRange] = React.useState(180);

  const handlePosEastWest = (event, newPosEastWest) => {
    if (newPosEastWest !== null) {
      setPosEastWest(newPosEastWest);
    }
  };

  const handleCoordSystem = (event, newCoordSystem) => {
    if (newCoordSystem !== null) {
      setCoordSystem(newCoordSystem);
    }
  };

  const handleLonRange = (event, newLonRange) => {
    if (newLonRange !== null) {
      setLonRange(newLonRange);
    }
  };

  return (
    <div className="flexbar">
      <div className="flexbar-item">
        <Tooltip
          title={
            <Typography variant="subtitle1">
              Switch to either positive east or positive west longitude
              reporting.
            </Typography>
          }
          enterDelay={800}
          leaveDelay={0}
          TransitionComponent={Zoom}
        >
          <div id="lonLatEastWest">
            <ToggleButtonGroup
              exclusive
              size="small"
              value={posEastWest}
              onChange={handlePosEastWest}
            >
              <ToggleButton
                color="primary"
                id="consoleLonEastBtn"
                value="PositiveEast"
              >
                <AutorenewIcon fontSize="small" sx={css.flip} />
                <Typography sx={css.buttonText}>East</Typography>
              </ToggleButton>
              <ToggleButton
                color="primary"
                id="consoleLonWestBtn"
                value="PositiveWest"
              >
                <AutorenewIcon fontSize="small" />
                <Typography sx={css.buttonText}>West</Typography>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Tooltip>
      </div>

      <div className="flexbar-item">
        <Tooltip
          title={
            <Typography variant="subtitle1">
              Switch to either a planetocentric or planetographic coordinate
              system.
            </Typography>
          }
          enterDelay={800}
          leaveDelay={0}
          arrow
          TransitionComponent={Zoom}
        >
          <div id="lonLatType">
            <ToggleButtonGroup
              exclusive
              size="small"
              value={coordSystem}
              onChange={handleCoordSystem}
            >
              <ToggleButton
                value="Planetocentric"
                id="consoleLatTypeOcentric"
                color="primary"
              >
                <i style={css.circle} />
                <Typography sx={css.buttonText}>centric</Typography>
              </ToggleButton>
              <ToggleButton
                id="consoleLatTypeOgraphic"
                value="Planetographic"
                color="primary"
              >
                <i style={css.oval} />
                <Typography sx={css.buttonText}>graphic</Typography>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Tooltip>
      </div>
      <Divider orientation="vertical" />

      <div className="flexbar-item">
        <Tooltip
          sx={styledTooltip}
          title={
            <Typography variant="subtitle1">
              Switch to either -180&deg; to 180&deg; or 0&deg; to 360&deg;
              longitude range.
            </Typography>
          }
          enterDelay={800}
          leaveDelay={0}
          arrow
          TransitionComponent={Zoom}
        >
          <div id="lonLatRange">
            <ToggleButtonGroup
              exclusive
              size="small"
              value={lonRange}
              onChange={handleLonRange}
            >
              <ToggleButton
                id="consoleLon180Btn"
                value={180}
                color="primary">
                <ExposureIcon fontSize="small" />
                <Typography sx={css.buttonText}>180&deg;</Typography>
              </ToggleButton>
              <ToggleButton
                id="consoleLon360Btn"
                value={360}
                color="primary">
                <AddBoxIcon fontSize="small" />
                <Typography sx={css.buttonText}>360&deg;</Typography>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
