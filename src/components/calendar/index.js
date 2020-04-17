import React, {useState, useEffect} from "react";
import { 
  Paper,
  Grid,
} from '@material-ui/core';
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip
} from '@devexpress/dx-react-scheduler-material-ui';
import {
  mapSchedule
} from './utils';

export default function Calendar(props) {
  const [data, setData] = useState([]);

  useEffect(
    function () {
      setData(mapSchedule(props.data)); 
    },
    [props.data]
  );

  return (
    <Grid container item justify='center'>
      <Paper>
      <Scheduler data={data}>
        <WeekView startDayHour={props.hours[0]} endDayHour={props.hours[1]} />
        <Appointments />
        <AppointmentTooltip showCloseButton />
      </Scheduler>
    </Paper>
    </Grid>
  );
}

