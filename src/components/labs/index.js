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
Amplify.configure(awsconfig);

export default function FixedTags() {

  const [courses, setCourses] = useState([]);
  const result =  API.graphql(graphqlOperation(queries.getCourseList));

  result.then(function(res){
    console.log(res.data["getCourseList"]);
    var set = new Set();
    var unique = [];
    var tempCourses = res.data["getCourseList"];

    tempCourses.forEach(course => {
          if(!set.has(course.courseName)){
            set.add(course.courseName);
            unique.push(course);
          }
        }
    );
    setCourses(unique);
  });

  return (
      <Autocomplete
          multiple
          id="fixed-tags-demo"
          options={courses}
          getOptionLabel={(option) => option.courseName}
          renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                  <Chip label={option.coureName} {...getTagProps({ index })} />
              ))
          }
          style={{ width: 500 }}
          renderInput={(params) => (
              <TextField {...params} label="SEARCH" variant="outlined" placeholder="Courses" />
          )}
      />
  );

}
