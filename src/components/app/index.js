import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import Welcome from "../welcome";
import Home from "../home";

function App() {
  return (
    <Grid>
      <Home></Home>
      <Welcome></Welcome>
    </Grid>
  );
}

export default App;
