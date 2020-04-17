import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import ScheduleView from '../schedule-view';
import Filters from '../filters';
import {
  Grid
} from '@material-ui/core';

//replace with API call
import json from "./schedules.json";
const data = json.data.createSchedules;

function App() {
  return (
    <Grid container justify='center'>
      <ScheduleView data={data} auth={true}/>
    {/* <Filters 
      minTime={800} 
      maxTime={1700}
      school='temple'
      term={202036}
      /> */}
    </Grid>
  );
}

export default App;
