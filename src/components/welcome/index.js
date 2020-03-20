import React from "react";
import {
  Container,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  CardActions,
  NativeSelect,
  FormControl,
  FormHelperText,
  Select,
  InputLabel,
  MenuItem
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => createStyles({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
}));

const Welcome = props => {
  const classes = useStyles();

  const [school, setSchool] = React.useState('');

  const handleChange = event => {
    setSchool(event.target.value);
  };

  return (
    <Grid container justify="center">
       <Grid item>
       <Card>
        <CardHeader title="Welcome to ScheduleMaker!" component="h1"/>
        <CardContent>
            <Typography align="center">
                To begin, select your school.
            </Typography>
            
        </CardContent>
        <CardActions>
        <Grid container justify="center">
                <FormControl className={classes.formControl}>
                <InputLabel id="school-select-label">School</InputLabel>
                <Select 
                // native
                value={school}
                onChange={handleChange}
                inputProps={{
                    name: 'school',
                    id :'school-select'
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
  );
};

export default Welcome;
