import React from "react";
import ReactDOM from 'react-dom';
import "./App.css";
import { Grid } from "@material-ui/core";
import Welcome from "../welcome";
import Home from "../home";
import Calendar from "../calendar";
import Labs from '../labs';

ReactDOM.render(<Labs />, document.querySelector('#root'));

function App() {
  return (
    <Grid>
      {/* <Home></Home>
      <Welcome></Welcome> */}
      <Labs></Labs>
      <Calendar></Calendar>
    </Grid>
  );
}

export default App;
