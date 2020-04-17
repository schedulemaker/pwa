import React, {useState, useEffect} from "react";
import { 
  Paper,
  Grid,
  Typography
} from '@material-ui/core';
import {
  Room,
  Person,
  Info
} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip
} from '@devexpress/dx-react-scheduler-material-ui';
import {
  mapSchedule,
  strToRGB
} from './utils';

const style = ({ palette }) => ({
  textCenter: {
    textAlign: 'center',
  },
  icon: {
    color: palette.action.active,
  },
});

const Appointment = ({
  children, style, data, ...restProps
}) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      backgroundColor: `#${strToRGB(data.title)}`
    }}
  >
    {children}
  </Appointments.Appointment>
);

const Header = (data, restProps) => (
  <AppointmentTooltip.Header
    {...restProps}
    appointmentData={data}
  >

  </AppointmentTooltip.Header>
);

const Content = withStyles(style, { name: 'Content' })(({
  children, appointmentData, classes, ...restProps
}) => (
  <AppointmentTooltip.Content {...restProps} appointmentData={appointmentData}>
     <Grid container alignItems="center">
      <Grid item xs={2} className={classes.textCenter}>
        <Room className={classes.icon} />
      </Grid>
      <Grid item xs={10}>
        <span>{appointmentData.location}</span>
      </Grid>
      <Grid item xs={2} className={classes.textCenter}>
        <Person className={classes.icon} />
      </Grid>
      <Grid item xs={10}>
        <span>{appointmentData.instructors.join(', ')}</span>
      </Grid>
      <Grid item xs={2} className={classes.textCenter}>
        <Info className={classes.icon} />
      </Grid>
      <Grid item xs={10}>
        <span>{appointmentData.crn}</span>
      </Grid>
    </Grid>
  </AppointmentTooltip.Content>
));

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
        <Appointments
          // appointmentComponent={Appointment}
         />
        <AppointmentTooltip 
          showCloseButton 
          // headerComponent={Header}
          contentComponent={Content}
          />
      </Scheduler>
    </Paper>
    </Grid>
  );
}

