import React from "react";
import ConsoleAppBar from "../presentational/ConsoleAppBar.jsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    height: 100,
    width: "100%"
  },
  consAppbar: {
    maxWidth: 800,
    height: 100,
    width: "auto"
  }
});

export default function ConsoleContainer(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ConsoleAppBar className={classes.consAppbar} />
    </div>
  );
}
