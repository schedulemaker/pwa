import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Grid,
} from "@material-ui/core";
import { Home, Schedule, FilterList } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  bnav: {
    position: "fixed",
    bottom: 0,
  },
}));

export default function BotNav(props) {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.bnav}>
      <BottomNavigation
        value={props.value}
        onChange={(e, tab) => props.onChange(tab)}
      >
        <BottomNavigationAction label="Home" icon={<Home />} />
        <BottomNavigationAction label="View" icon={<Schedule />} />
        <BottomNavigationAction label="Filter" icon={<FilterList />} />
      </BottomNavigation>
    </Grid>
  );
}
