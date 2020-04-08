import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import Welcome from "../welcome";
import Home from "../home";
import Calendar from "../calendar";

function App() {
  return (
    <Grid>
      {/* <Home></Home>
      <Welcome></Welcome> */}
      <Calendar></Calendar>
    </Grid>
  );
}

export default App;
