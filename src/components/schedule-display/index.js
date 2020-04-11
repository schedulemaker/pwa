import React from "react";
import { Paper, Grid, MobileStepper, Button } from "@material-ui/core";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  SportsRugbySharp,
} from "@material-ui/icons";
import SwipeableViews from "react-swipeable-views";
import {
  withStyles,
  ThemeProvider,
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";
import Calendar from "../calendar";
import json from "./schedules.json";
const data = json.data.createSchedules;

const useStyles = makeStyles((theme) => ({
  carouselButton: {
    background: ["rgba(255,255,255,0.1)"],
  },
}));

export default function ScheduleView() {
  const classes = useStyles();
  const theme = useTheme();
  const [index, setIndex] = React.useState(0);

  function showNext() {
    setIndex(index + 1);
  }

  function showPrev() {
    setIndex(index - 1);
  }

  return (
    <Grid 
        container
        wrap='nowrap'
    >
        <Grid 
        container
        direction='column'
        alignItems='center'
        justify='center'
        >
            <Grid item>
        <Button
          className={classes.carouselButton}
          variant="outlined"
          size="large"
          onClick={showPrev}
          disabled={index === 0}
        >
          <KeyboardArrowLeft />
        </Button>
      </Grid>
        </Grid>
      
      <Grid item>
      <SwipeableViews axis={"x"} enableMouseEvents>
      <Calendar data={data} index={index} />
        </SwipeableViews>
      </Grid>
      <Grid 
        container
        direction='column'
        alignItems='center'
        justify='center'
        >
            <Grid item>
        <Button
          className={classes.carouselButton}
          variant="outlined"
          size="large"
          onClick={showNext}
          disabled={index === data.length - 1}
        >
            <KeyboardArrowRight />
        </Button>
        </Grid>
        </Grid>
    </Grid>
  );
}
