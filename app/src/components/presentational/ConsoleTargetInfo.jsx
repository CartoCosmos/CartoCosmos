import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

/**
 * Controls css styling for this component using js to css
 */
const useStyles = makeStyles({
  img: {
    width: 36,
    height: 36,
    margin: "auto"
  },
  grid: {
    width: "100%",
    maxHeight: 45
  },
  title: {
    color: "#343a40",
    fontWeight: 900,
    fontSize: 42,
    letterSpacing: "0rem",
    paddingRight: 55
  }
});

/**
 * Component that displays target body name in console.
 * Retrieves target name from target selector
 *
 * @component
 * @example
 * const target = Mars
 * return (
 *   <ConsoleTargetInfo target={target}/>
 * )
 */
export default function ConsoleTargetInfo(props) {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      justify="center"
      alignItems="center"
      className={classes.grid}
      xs
    >
      <Grid item>
        <Typography id="targetName" className={classes.title} variant="h4">
          {props.target.toUpperCase()}
        </Typography>
      </Grid>
    </Grid>
  );
}
