import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  tooltip: {
    backgroundColor: "#f8f9fa",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 250,
    fontSize: 12,
    border: `2px solid ${theme.palette.divider}`,
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
}));

export default function StyledTooltip(props) {
  const classes = useStyles();

  return <Tooltip classes={classes} {...props} />;
}
