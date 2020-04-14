import React from "react";
import { 
  Paper,
  Grid,
} from '@material-ui/core';
import {
  Scheduler,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import {
  mapSchedule,
  getTimes
} from './maps';

export default function Calendar(props) {
  const [data, setData] = React.useState([]);
  const [startHour, setStartHour] = React.useState(8);
  const [endHour, setEndHour] = React.useState(17);

  React.useEffect(
    function () {
      setData(mapSchedule(props.data)); //Replace with API call
      const [startHour, endHour] = getTimes(props.data);
      setStartHour(startHour);
      setEndHour(endHour);
    },
    [props.data]
  );

  return (
    <Grid container item justify='center'>
      <Paper>
      <Scheduler data={data}>
        <WeekView startDayHour={startHour} endDayHour={endHour} />
        <Appointments />
      </Scheduler>
    </Paper>
    </Grid>
  );
}

