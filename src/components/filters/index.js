import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import {Alert, AlertTitle} from '@material-ui/lab';
import InstructorSearch from "../instructor-search";
import TimeFilters from "../times";
import Rankings from "../rankings";
import DayFilters from "../days";

export default function Filters(props) {
  return (
    <Grid container justify="center" alignItems="center" spacing={3}>
      {props.count > 0 ? (
        <Alert severity='success'>
          <AlertTitle>{props.count} schedules found</AlertTitle>
          Use the options below to customize your schedule
        </Alert>
      ) : (
        <Alert severity='error'>
          <AlertTitle>No schedules found</AlertTitle>
          Try changing some of the options below to be less restrictive
        </Alert>
      )}
      <Grid container item justify="space-evenly">
        <TimeFilters times={props.times} changeFilters={props.changeFilters} />
      </Grid>
      <Grid container item justify="center" alignItems="center">
        <DayFilters changeFilters={props.changeFilters}/>
      </Grid>
      <Grid container item justify="space-evenly">
        <Rankings changeFilters={props.changeFilters}/>
      </Grid>
      <Grid container item justify="center">
        <InstructorSearch 
          school={props.school} 
          term={props.term} 
          instructors={props.instructors} 
          changeFilters={props.changeFilters}
          instructorFilter={props.instructorFilter}
          />
      </Grid>
    </Grid>
  );
}
