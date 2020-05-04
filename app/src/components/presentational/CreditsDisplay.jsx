import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import SvgIcon from "@material-ui/core/SvgIcon";
import CartoCosmosIcon from "../../assets/img/cartocosmos-logo.svg";

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
  },
  link: {
    fontSize: 12,
    fontWeight: "600px !important"
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
            target="_blank"
            rel="noopener"
            color="inherit"
            style={{ fontWeight: 600 }}
            variant="caption"
            href="https://cartocosmos.github.io/docs/index.html"
          >
            Documentation
          </Link>
        </Grid>
        <Divider orientation="vertical" />
        <Grid item xs={2}>
          <Link
            target="_blank"
            rel="noopener"
            color="inherit"
            style={{ fontWeight: 600 }}
            variant="caption"
            href="https://docs.google.com/document/d/1Wy5rwjEU7qACsI3jc-JdGEjh8jkq_v5DyQelfNOkjO4/edit?usp=sharing"
          >
            User Manual
          </Link>
        </Grid>
        <Divider orientation="vertical" />
        <Grid item xs={4}>
          <Typography style={{ fontSize: 12 }} variant="caption">
            Made by{" "}
            <Link
              target="_blank"
              rel="noopener"
              variant="caption"
              color="inherit"
              style={{ fontWeight: 600 }}
              href="https://cefns.nau.edu/capstone/projects/CS/2020/CartoCosmos-S20/"
            >
              CartoCosmos{" "}
            </Link>
          </Typography>
          <SvgIcon
            viewBox="0 0 1000 1000"
            style={{
              color: "#343a40",
              top: 3,
              width: 13,
              height: 13,
              position: "relative"
            }}
            component={CartoCosmosIcon}
          />
        </Grid>
        <Divider orientation="vertical" />
        <Grid item xs={2}>
          <Link
            target="_blank"
            rel="noopener"
            color="inherit"
            variant="caption"
            style={{ fontWeight: 600 }}
            href="https://cartocosmos-test.readthedocs.io/en/latest/"
          >
            Jupyter Notebooks
          </Link>
        </Grid>
        <Divider orientation="vertical" />
        <Grid item xs={2}>
          <Link
            target="_blank"
            rel="noopener"
            href="https://github.com/CartoCosmos/CartoCosmos/"
          >
            <GitHubIcon
              style={{
                color: "#343a40",
                fontSize: 16,
                top: 2,
                position: "relative"
              }}
            />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
