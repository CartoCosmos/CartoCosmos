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
import Divider from "@material-ui/core/Divider";
import { Paper } from "@material-ui/core";

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
    width: 16,
    height: 10,
    borderRadius: "50%",
    border: "2px solid",
    background: "transparent",
    marginBottom: 2,
    marginRight: 2
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    border: "2px solid",
    background: "transparent",
    marginBottom: 2,
    marginRight: 2
  },
  buttonText: {
    fontSize: 13
  },
  paper: {
    display: "flex",
    border: `1px solid ${theme.palette.divider}`,
    flexWrap: "wrap",
    backgroundColor: "#f8f9fa"
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
    height: 30,
    minHeight: 30,
    maxHeight: 30,
    color: fade("#343a40", 0.8),
    backgroundColor: "#f8f9fa",
    border: "none",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "transparent"
    },
    "&$selected": {
      cursor: "not-allowed",
      pointerEvents: "none",
      color: "#343a40",
      backgroundColor: fade("#dee2e6", 0.75),
      "&:hover": {
        backgroundColor: "transparent"
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
    backgroundColor: "#f8f9fa"
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
    <Grid
      container
      item
      wrap="nowrap"
      justify="center"
      alignItems="center"
      className={classes.grid}
      xs={8}
    >
      <Paper variant="outlined" className={classes.paper}>
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
        <StyledDivider orientation="vertical" />
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
        <StyledDivider orientation="vertical" />
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
      </Paper>
    </Grid>
  );
}
