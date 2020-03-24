import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

/**
 * Controls css styling for this component using js to css
 */
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#f8f9fa",
    width: 800,
    maxWidth: 800,
    maxHeight: 25,
    height: 25,
    borderTop: `1px solid ${theme.palette.divider}`,
    color: "#343a40",
    textAlign: "center",
    "& hr": {
      //margin: theme.spacing(0, 1),
      height: 25
    },
    "& svg": {
      margin: theme.spacing(0.25)
    },
    "& > *": {
      maxHeight: 25
    }
  }
}));

export default function CreditsDisplay() {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        alignItems="center"
        alignContent="center"
        justify="space-evenly"
        className={classes.root}
        wrap="nowrap"
      >
        <Grid item xs={2}>
          <Link
            color="inherit"
            style={{ fontSize: 12, fontWeight: 600 }}
            variant="caption"
            href=""
          >
            Documentation
          </Link>
        </Grid>
        <Divider orientation="vertical" />
        <Grid item xs={2}>
          <Link
            color="inherit"
            style={{ fontSize: 12, fontWeight: 600 }}
            variant="caption"
            href=""
          >
            User Manual
          </Link>
        </Grid>
        <Divider orientation="vertical" />
        <Grid item xs={4}>
          <Typography
            style={{ fontSize: 12, fontStyle: "italic" }}
            variant="caption"
          >
            Made by{" "}
          </Typography>
          <Link
            variant="caption"
            color="inherit"
            style={{ fontSize: 12, fontWeight: 600 }}
            href="https://cefns.nau.edu/capstone/projects/CS/2020/CartoCosmos-S20/#/"
          >
            CartoCosmos
          </Link>
        </Grid>
        <Divider orientation="vertical" />
        <Grid item xs={2}>
          <Link
            color="inherit"
            style={{ fontSize: 12, fontWeight: 600 }}
            variant="caption"
            href=""
          >
            Jupyter Notebooks
          </Link>
        </Grid>
        <Divider orientation="vertical" />
        <Grid item xs={2}>
          <Link href="https://github.com/CartoCosmos/CartoCosmos">
            <GitHubIcon style={{ color: "#343a40", fontSize: 20 }} />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
