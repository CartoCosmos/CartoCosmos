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
  }
};


/**
 * Custom Component that uses ToggleButton with modified css styling
 */
const styledToggleButton = {
  root: {
    height: 30,
    color: alpha("#f8f9fa", 0.8),
    backgroundColor: "transparent", //alpha("#1971c2", 0.7),
    border: "none",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "transparent"
    },
    "&$selected": {
      cursor: "not-allowed",
      pointerEvents: "none",
      color: "#f8f9fa",
      backgroundColor: "#1971c2",
      "&:hover": {
        backgroundColor: "#1971c2"
      }
    }
  },
  selected: {
    cursor: "not-allowed",
    pointerEvents: "none",
    color: "#343a40",
    backgroundColor: "#e9ecef"
  }
};

const styledToggleButtonGroup = {
  root: {
    backgroundColor: alpha("#1971c2", 0.7),
    border: `1px solid black`,
    height: 37
  },
  grouped: {
    margin: "4px",
    border: "none",
    padding: "0, 6px",
    "&:not(:first-of-type)": {
      borderRadius: "4px"
    },
    "&:first-of-type": {
      borderRadius: "4px"
    }
  }
};

const styledDivider = {
  root: {
    alignSelf: "stretch",
    height: "auto",
    margin: "8px, 4px",
    backgroundColor: alpha("#f8f9fa", 0.8),
    width: 1
  }
};

const styledTooltip = {
  root: {
    backgroundColor: "#f8f9fa",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 250,
    fontSize: 12,
    border: `2px solid black`,
    textAlign: "center"
  },
  arrow: {
    color: "#f8f9fa"
  },
  tooltipPlacementRight: {
    margin: "0 8px"
  },
  tooltipPlacementLeft: {
    margin: "0 8px"
  },
  tooltipPlacementTop: {
    margin: "8px 0"
  },
  tooltipPlacementBottom: {
    margin: "8px 0"
  }
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
              sx={styledToggleButtonGroup}
            >
              <ToggleButton
                id="consoleLonEastBtn"
                value="PositiveEast"
                style={styledToggleButton}>
                <AutorenewIcon fontSize="small" sx={css.flip} />
                <Typography sx={css.buttonText}>East</Typography>
              </ToggleButton>
              <ToggleButton
                id="consoleLonWestBtn"
                value="PositiveWest"
                sx={styledToggleButton}>
                <AutorenewIcon fontSize="small" />
                <Typography sx={css.buttonText}>West</Typography>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Tooltip>
      </div>
      <Divider sx={styledDivider} orientation="vertical" />

      <div className="flexbar-item">
        <Tooltip
          sx={styledTooltip}
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
              sx={styledToggleButton}
            >
              <ToggleButton
                value="Planetocentric"
                id="consoleLatTypeOcentric"
                sx={styledToggleButton}
              >
                <i style={css.circle} />
                <Typography sx={css.buttonText}>centric</Typography>
              </ToggleButton>
              <ToggleButton
                id="consoleLatTypeOgraphic"
                value="Planetographic"
                sx={styledToggleButton}
              >
                <i style={css.oval} />
                <Typography sx={css.buttonText}>graphic</Typography>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Tooltip>
      </div>
      <Divider orientation="vertical" sx={styledDivider} />

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
              sx={styledToggleButtonGroup}
            >
              <ToggleButton sx={styledToggleButton} id="consoleLon180Btn" value={180}>
                <ExposureIcon fontSize="small" />
                <Typography sx={css.buttonText}>180&deg;</Typography>
              </ToggleButton>
              <ToggleButton sx={styledToggleButton} id="consoleLon360Btn" value={360}>
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
