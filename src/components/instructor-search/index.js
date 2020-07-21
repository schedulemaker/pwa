import React, { 
  useEffect,
  useState 
} from "react";
import {
    Chip,
    TextField,
} from '@material-ui/core';
import {
  Autocomplete,
  Skeleton
} from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';
Amplify.configure(awsconfig);

  const useStyles = makeStyles((theme) => ({
    root: {
      width: 300,
      "& > * + *": {
        marginTop: theme.spacing(3),
      },
    },
  }));

  export default function IntructorSearch(props) {
    const classes = useStyles();
    // const [searchDefault, setSearchDefault] = useState([]);

    const handleInputChange = function(event, value){
      value.length === 0 ?
        props.changeFilters('instructors', null) :
        props.changeFilters('instructors', value.map(v => v.code));
        // setSearchDefault(value);
    }

    return (
      <div className={classes.root}>
        {props.instructors.length === 0 ? (
          <Skeleton animation="wave" />
        ) : (
          <Autocomplete
            onChange={handleInputChange}
            multiple
            limitTags={2}
            value={props.instructorFilter ? props.instructors.filter(x => props.instructorFilter.includes(x.code)) : []}
            // autoComplete
            id="instructor-search"
            options={props.instructors}
            getOptionLabel={(option) => option.description}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Preferred instructors"
                placeholder="Instructors"
              />
            )}
          />
        )}
      </div>
    );
  }