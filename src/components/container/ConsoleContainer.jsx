import React, { Component } from "react";
import ReactDOM from "react-dom";
import ConsoleTargetInfo from "../presentational/ConsoleTargetInfo.jsx";
import ConsoleProjectionButtons from "../presentational/ConsoleProjectionButtons.jsx";
import ConsoleLonLatSelects from "../presentational/ConsoleLonLatSelects.jsx";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

class ConsoleContainer extends Component {
  constructor() {
    super();

    this.state = {};

    /* this.handleChange = this.handleChange.bind(this); */
  }

  /* handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  } */

  render() {
    return (
      <Grid container spacing={1}>
        <ConsoleProjectionButtons />
        <ConsoleTargetInfo />
        <ConsoleLonLatSelects />
      </Grid>
    );
  }
}

export default ConsoleContainer;
