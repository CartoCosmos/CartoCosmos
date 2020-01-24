import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

class ConsoleTargetInfo extends Component {
  constructor() {
    super();

    this.state = {
      targetName: "Mars"
    };
  }

  render() {
    const { targetName } = this.state;
    return (
      <Grid container item direction="column">
        <Grid item>
          <Typography variant="h2">{targetName}</Typography>
        </Grid>
        <Grid item>
          <img></img>
        </Grid>
      </Grid>
    );
  }
}

export default ConsoleTargetInfo;
