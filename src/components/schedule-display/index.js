import React from "react";
import { 
  Paper, 
  Grid, 
  MobileStepper, 
  Button 
} from "@material-ui/core";
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
    // transform: ["translate(0, 1000%)"],
    "z-index": 10,
  },
}));

export default function ScheduleView(props) {
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
    <Grid container justify='center'>
      <SwipeableViews axis={"x"} enableMouseEvents>
        <Calendar data={data[index]} />
      </SwipeableViews>
      <MobileStepper
        steps={data.length}
        position="static"
        variant="text"
        activeStep={index}
        nextButton={
          <Button
            // className={classes.carouselButton}
            // variant="outlined"
            size="large"
            onClick={showNext}
            disabled={index === data.length - 1}
          >
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button
            // className={classes.carouselButton}
            // variant="outlined"
            size="large"
            onClick={showPrev}
            disabled={index === 0}
          >
            <KeyboardArrowLeft />
          </Button>
        }
      />
    </Grid>
  );
}
