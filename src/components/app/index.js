import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import Welcome from "../welcome";
import Home from "../home";
import ScheduleView from '../schedule-display';

function App() {
  return (
    <Grid>
      {/* <Home></Home>
      <Welcome></Welcome> */}
      <ScheduleView />
    </Grid>
  );
}

export default App;
