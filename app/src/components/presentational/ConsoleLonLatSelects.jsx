import React from "react";
import { alpha, makeStyles, withStyles } from "@material-ui/core/styles";
import Zoom from "@mui/material/Zoom";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import AddBoxIcon from "@mui/icons-material/AddBoxOutlined";
import ExposureIcon from "@mui/icons-material/Exposure";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import StyledTooltip from "./StyledTooltip.jsx";

/**
 * Controls css styling for this component using js to css
 */
const useStyles = makeStyles(theme => ({
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
}));

/**
 * Custom Component that uses ToggleButton with modified css styling
 */
const StyledToggleButton = withStyles(theme => ({
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
}))(ToggleButton);

const StyledToggleButtonGroup = withStyles(theme => ({
  root: {
    backgroundColor: alpha("#1971c2", 0.7),
    border: `1px solid ${theme.palette.divider}`,
    height: 37
  },
  grouped: {
    margin: theme.spacing(0.5),
    border: "none",
    padding: theme.spacing(0, 0.75),
    "&:not(:first-child)": {
      borderRadius: theme.shape.borderRadius
    },
    "&:first-child": {
      borderRadius: theme.shape.borderRadius
    }
  }
}))(ToggleButtonGroup);

const StyledDivider = withStyles(theme => ({
  root: {
    alignSelf: "stretch",
    height: "auto",
    margin: theme.spacing(1, 0.5),
    backgroundColor: alpha("#f8f9fa", 0.8),
    width: 1
  }
}))(Divider);
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

  const classes = useStyles();

  return (
    <div className="flexbar">
      <div className="flexbar-item">
        <StyledTooltip
          title={
            <Typography variant="subtitle1">
              Switch to either positive east or positive west longitude
              reporting.
            </Typography>
          }
          enterDelay={800}
          leaveDelay={0}
          arrow
          TransitionComponent={Zoom}
        >
          <div id="lonLatEastWest">
            <StyledToggleButtonGroup
              exclusive
              size="small"
              value={posEastWest}
              onChange={handlePosEastWest}
            >
              <StyledToggleButton id="consoleLonEastBtn" value="PositiveEast">
                <AutorenewIcon fontSize="small" className={classes.flip} />
                <Typography className={classes.buttonText}>East</Typography>
              </StyledToggleButton>
              <StyledToggleButton id="consoleLonWestBtn" value="PositiveWest">
                <AutorenewIcon fontSize="small" />
                <Typography className={classes.buttonText}>West</Typography>
              </StyledToggleButton>
            </StyledToggleButtonGroup>
          </div>
        </StyledTooltip>
      </div>
      <StyledDivider orientation="vertical" />

      <div className="flexbar-item">
        <StyledTooltip
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
            <StyledToggleButtonGroup
              exclusive
              size="small"
              value={coordSystem}
              onChange={handleCoordSystem}
            >
              <StyledToggleButton
                value="Planetocentric"
                id="consoleLatTypeOcentric"
              >
                <i className={classes.circle} />
                <Typography className={classes.buttonText}>centric</Typography>
              </StyledToggleButton>
              <StyledToggleButton
                id="consoleLatTypeOgraphic"
                value="Planetographic"
              >
                <i className={classes.oval} />
                <Typography className={classes.buttonText}>graphic</Typography>
              </StyledToggleButton>
            </StyledToggleButtonGroup>
          </div>
        </StyledTooltip>
      </div>
      <StyledDivider orientation="vertical" />

      <div className="flexbar-item">
        <StyledTooltip
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
            <StyledToggleButtonGroup
              exclusive
              size="small"
              value={lonRange}
              onChange={handleLonRange}
            >
              <StyledToggleButton id="consoleLon180Btn" value={180}>
                <ExposureIcon fontSize="small" />
                <Typography className={classes.buttonText}>180&deg;</Typography>
              </StyledToggleButton>
              <StyledToggleButton id="consoleLon360Btn" value={360}>
                <AddBoxIcon fontSize="small" />
                <Typography className={classes.buttonText}>360&deg;</Typography>
              </StyledToggleButton>
            </StyledToggleButtonGroup>
          </div>
        </StyledTooltip>
      </div>
    </div>
  );
}
