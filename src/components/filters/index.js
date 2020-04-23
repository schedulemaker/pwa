import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import InstructorSearch from "../instructor-search";
import TimeFilters from "../times";
import Rankings from "../rankings";
import DayFilters from "../days";

export default function Filters(props) {
  return (
    <Grid container direction="column" justify="space-evenly">
        <Grid container item justify="center">
          <Alert severity="success">
            <AlertTitle>
              {props.count} schedule{props.count !== 1 && "s"} found
            </AlertTitle>
            Use the options below to customize your schedule
          </Alert>
        </Grid>
        <Grid container item justify="space-evenly">
          <TimeFilters
            times={props.times}
            changeFilters={props.changeFilters}
          />
        </Grid>
        <Grid container item justify="center" alignItems="center">
          <DayFilters changeFilters={props.changeFilters} days={props.days} />
        </Grid>
        <Grid container item justify="space-evenly">
          <Rankings
            changeFilters={props.changeFilters}
            rankings={props.rankings}
          />
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
        {/* {props.count > 0 ? (
    
      {/* ) : (
        
      )} */}
      {/* <Alert severity="error">
          <AlertTitle>No schedules found</AlertTitle>
          Try changing some of the options below
        </Alert> */}
      </Grid>
      
  );
}
