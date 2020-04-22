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


export async function fetchCourses(courseName, title) {
  const queryParams = {
    courseName: courseName,
    title: title,
  };
  const result = await API.graphql(
    graphqlOperation(getCourseList, queryParams)
  );
  return result.data.title;
}

const useStyles = makeStyles(function (theme) {
  return {
    root: {
      width: 300,
      "& > * + *": {
        marginTop: theme.spacing(3),
      },
    },
  };
});

export default function CourseSearch(props) {
  const classes = useStyles(), [data, setData] = useState([]), handleInputChange = function (event, value) {
    value.length !== 0 ? props.changeFilters('courses', value.map(v => Number.parseInt(v.code))) : props.changeFilters('courses', null);
  };

  useEffect(() => {
    fetchCourses(props.courseName, props.title).then((data) => {
      setData(data);
    });
  }, [props.courseName, props.title]);

  return (
    <div className={classes.root}>
      {data.length === 0 ? (
          <Skeleton animation="wave"/>
      ) : (
          <Autocomplete
              onInputChange={handleInputChange}
              multiple
              limitTags={2}
              // autoComplete
              id="Search-courses"
              options={data.filter(x => props.title.includes(Number.parseInt(x.code)))}
              getOptionLabel={(option) => option.description}
              filterSelectedOptions
              renderInput={(params) => (
                  <TextField
                      {...params}
                      variant="outlined"
                      label="SEARCH"
                      placeholder="Courses"
                  />
              )}/>
      )}
    </div>
  );
}
