import React from "react";
import {
  Container,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  CardActions,
  FormControl,
  FormHelperText,
  Select,
  InputLabel,
  MenuItem,
  Backdrop,
  Link
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import "../app/App.css";
import { blueGrey } from "@material-ui/core/colors";

/**
 * DEFINE STYLES
 */
const useStyles = makeStyles(theme =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff"
    },
  })
);

const Welcome = props => {
  const classes = useStyles();

  /**
   * CONFIGURE STATE
   */
  const [school, setSchool] = React.useState("");
  const [open, setOpen] = React.useState(true);
  const [auth, setAuth] = React.useState(false);

  /**
   * EVENT HANDLERS
   */  

  const changeSchool = event => {
    setSchool(event.target.value);
    closeBackdrop();
  };

  const closeBackdrop = () => {
    setOpen(!open);
  };

  const changeAuth = () => {
    setAuth(!auth);
    closeBackdrop();
  }

  /**
   * Define DOM
   */
  return (
    <Backdrop className={classes.backdrop} open={open}>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Card>
            <CardHeader title="Welcome to ScheduleMaker!" titleTypographyProps={{align:'center'}} />
            <CardContent>
              <Typography align="center">
                To begin, please select your school, or <Link href="#" onclick={changeAuth}>Login/Sign up</Link> to load/save your schedules.
              </Typography>
            </CardContent>
            <CardActions>
              <Grid container justify="center">
                <FormControl className={classes.formControl}>
                  <InputLabel id="school-select-label">School</InputLabel>
                  <Select
                    // native
                    value={school}
                    onChange={changeSchool}
                    inputProps={{
                      name: "school",
                      id: "school-select"
                    }}
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value={"temple"}>Temple University</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Backdrop>
  );
};

export default Welcome;
