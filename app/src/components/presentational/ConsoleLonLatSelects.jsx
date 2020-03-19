import React from "react";
import Grid from "@material-ui/core/Grid";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import AddBoxIcon from "@material-ui/icons/AddBoxOutlined";
import ExposureIcon from "@material-ui/icons/Exposure";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

/**
 * Controls css styling for this component using js to css
 */
const useStyles = makeStyles(theme => ({
  grid: {
    width: "100%",
    height: "100%",
    maxHeight: 55
  },
  flip: {
    transform: "scaleY(-1)"
  },
  oval: {
    width: 18,
    height: 12,
    borderRadius: "50%",
    border: "2px solid",
    background: "transparent",
    marginBottom: 2
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    border: "2px solid",
    background: "transparent",
    marginBottom: 2
  }
}));

/**
 * Custom Component that uses Tooltip with modified css styling
 */
const StyledTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 250,
    fontSize: 12,
    border: "1px solid #dadde9"
  }
}))(Tooltip);

/**
 * Custom Component that uses ToggleButton with modified css styling
 */
const StyledToggleButton = withStyles(theme => ({
  root: {
    height: 32,
    minHeight: 32,
    maxHeight: 32,
    color: "#fff",
    background: fade("#1971c2", 0.6),
    border: "none",
    "&:hover": {
      backgroundColor: fade("#1971c2", 0.8)
    },
    "&$selected": {
      cursor: "not-allowed",
      pointerEvents: "none",
      color: "#fff",
      backgroundColor: "#1971c2",
      "&:hover": {
        backgroundColor: "#1971c2"
      }
    }
  },
  selected: {
    cursor: "not-allowed",
    pointerEvents: "none",
    color: "#fff",
    backgroundColor: "#1971c2"
  }
}))(ToggleButton);

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
    if (newPosEastWest != null) {
      setPosEastWest(newPosEastWest);
    } else {
      event.stopPropagation();
    }
  };

  const handleCoordSystem = (event, newCoordSystem) => {
    if (newCoordSystem != null) {
      setCoordSystem(newCoordSystem);
    } else {
      event.stopPropagation();
    }
  };

  const handleLonRange = (event, newLonRange) => {
    if (newLonRange != null) {
      setLonRange(newLonRange);
    } else {
      event.stopPropagation();
    }
  };

  const classes = useStyles();

  return (
    <Grid
      container
      item
      wrap="nowrap"
      justify="space-evenly"
      alignItems="center"
      className={classes.grid}
      xs={9}
    >
      <Grid item>
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
          <div>
            <ToggleButtonGroup
              exclusive
              size="small"
              value={posEastWest}
              onChange={handlePosEastWest}
            >
              <StyledToggleButton id="consoleLonEastBtn" value="PositiveEast">
                <AutorenewIcon className={classes.flip} />
                <Typography>East</Typography>
              </StyledToggleButton>
              <StyledToggleButton id="consoleLonWestBtn" value="PositiveWest">
                <AutorenewIcon />
                <Typography>West</Typography>
              </StyledToggleButton>
            </ToggleButtonGroup>
          </div>
        </StyledTooltip>
      </Grid>
      <Grid item>
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
          <div>
            <ToggleButtonGroup
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
                <Typography>centric</Typography>
              </StyledToggleButton>
              <StyledToggleButton
                id="consoleLatTypeOgraphic"
                value="Planetographic"
              >
                <i className={classes.oval} />
                <Typography>graphic</Typography>
              </StyledToggleButton>
            </ToggleButtonGroup>
          </div>
        </StyledTooltip>
      </Grid>
      <Grid item>
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
          <div>
            <ToggleButtonGroup
              exclusive
              size="small"
              value={lonRange}
              onChange={handleLonRange}
            >
              <StyledToggleButton id="consoleLon180Btn" value={180}>
                <ExposureIcon />
                <Typography>180&deg;</Typography>
              </StyledToggleButton>
              <StyledToggleButton id="consoleLon360Btn" value={360}>
                <AddBoxIcon />
                <Typography>360&deg;</Typography>
              </StyledToggleButton>
            </ToggleButtonGroup>
          </div>
        </StyledTooltip>
      </Grid>
    </Grid>
  );
}
