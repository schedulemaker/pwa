import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import InstructorSearch from "../instructor-search";
import TimeFilters from "../times";
import Rankings from "../rankings";
import DayFilters from "../days";

export default function Filters(props) {
  return (
    <Grid container justify="center" alignItems="center" spacing={3}>
      <Grid container item justify="space-evenly">
        <TimeFilters minTime={props.times[0]} maxTime={props.times[1]} />
      </Grid>
      <Grid container item justify="center" alignItems="center">
        <DayFilters />
      </Grid>
      <Grid container item justify="space-evenly">
        <Rankings />
      </Grid>
      <Grid container item justify="center">
        <InstructorSearch school={props.school} term={props.term} />
      </Grid>
    </Grid>
  );
}
