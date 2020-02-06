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

const useStyles = makeStyles(theme => ({
  grid: {
    width: "inherit",
    margin: "auto"
  },
  flip: {
    transform: "scaleY(-1)"
  },
  oval: {
    width: 21,
    height: 15,
    borderRadius: "50%",
    border: "2px solid",
    background: "transparent",
    marginRight: 1,
    marginBottom: 3
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: "50%",
    border: "2px solid",
    background: "transparent",
    marginRight: 1,
    marginBottom: 3
  }
}));

const StyledTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 250,
    fontSize: 12,
    border: "1px solid #dadde9"
  }
}))(Tooltip);

const StyledToggleButton = withStyles(theme => ({
  root: {
    color: fade("#022", 0.5),
    background: fade("#EFE6EE", 0.5),
    "&:hover": {
      backgroundColor: fade("#dce7b2", 0.99)
    },
    "&$selected": {
      color: "#022",
      backgroundColor: "#bcd6dd",
      "&:hover": {
        backgroundColor: "#bcd6dd",
        border: `1px solid ${fade(theme.palette.action.active, 0.12)}`
      }
    }
  },
  selected: {
    color: "#022",
    backgroundColor: "#bcd6dd"
  }
}))(ToggleButton);

export default function ConsoleLonLatSelects(props) {
  const [posEastWest, setPosEastWest] = React.useState("east");
  const [coordSystem, setCoordSystem] = React.useState("ocentric");
  const [lonRange, setLonRange] = React.useState(180);

  const handlePosEastWest = (event, newPosEastWest) => {
    if (newPosEastWest != null) {
      setPosEastWest(newPosEastWest);
    }
  };

  const handleCoordSystem = (event, newCoordSystem) => {
    if (newCoordSystem != null) {
      setCoordSystem(newCoordSystem);
    }
  };

  const handleLonRange = (event, newLonRange) => {
    if (newLonRange != null) {
      setLonRange(newLonRange);
    }
  };

  const classes = useStyles();

  return (
    <Grid
      container
      item
      className={classes.grid}
      justify="space-evenly"
      alignItems="flex-end"
      wrap="nowrap"
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
          leaveDelay={150}
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
              <StyledToggleButton value="east">
                <AutorenewIcon className={classes.flip} />
                <Typography>East</Typography>
              </StyledToggleButton>
              <StyledToggleButton value="west">
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
          leaveDelay={150}
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
              <StyledToggleButton value="ocentric">
                <span className={classes.circle} />
                <Typography>centric</Typography>
              </StyledToggleButton>
              <StyledToggleButton value="ographic">
                <span className={classes.oval} />
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
          leaveDelay={150}
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
              <StyledToggleButton value={180}>
                <ExposureIcon />
                <Typography>180&deg;</Typography>
              </StyledToggleButton>
              <StyledToggleButton value={360}>
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
