/* eslint-disable no-use-before-define */
import React, {
  useEffect,
  useState
} from "react";
import awsconfig from '../../aws-exports';
import {
  getBannerMetadata, getCourseList
} from '../../graphql/queries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import {
  Autocomplete,
  Skeleton
} from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
Amplify.configure(awsconfig);

async function fetchCourses(school, term) {
  const queryParams = {
    school: school,
    term: term,
    method: "getCourseList",
    params: {
      term: term,
    },
  };
  const [result] = await Promise.all([API.graphql(
      graphqlOperation(getCourseList, queryParams)
  )]);
  return result.data.getCourseList;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function CourseSearch(props) {
  const classes = useStyles();
  const [data, setData] = useState([]);

  const handleInputChange = function(event, value){
    value.length === 0 ?
      props.changeFilters('courses', null) :
      props.changeFilters('courses', value.map(v => Number.parseInt(v.code)));
  }

  useEffect(() => {
    fetchCourses(props.school, props.term).then((data) => {
      setData(data);
    });
  }, [props.school, props.term]);

  return (
    <div className={classes.root}>
      {data.length === 0 ? (
        <Skeleton animation="wave" />
      ) : (
        <Autocomplete
        onChange={handleInputChange}
          multiple
          limitTags={2}
          // autoComplete
          id="Search-courses"
          options={data}
          getOptionLabel={(option) => option.description}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="SEARCH"
              placeholder="Courses"
            />
          )}
        />
      )}
    </div>
  );
}
