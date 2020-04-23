/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import awsconfig from "../../aws-exports";
import { getCourseList } from "../../graphql/queries";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { Chip, TextField, Grid, List, ListItem, ListItemText } from "@material-ui/core";
import { Autocomplete, Skeleton } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import * as queries from "../../graphql/queries";
Amplify.configure(awsconfig);

async function getCourses(school, term) {
  const result = await API.graphql(graphqlOperation(queries.getCourseList));
  var set = new Set();
  var unique = [];
  result.data.getCourseList.forEach((course) => {
    if (!set.has(course.courseName)) {
      set.add(course.courseName);
      unique.push(course);
    }
  });
  return unique;
}



export default function FixedTags(props) {
  const [current, setCurrent] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses(props.school, props.term)
      .then((data) => setCourses(data))
      .catch((err) => console.log(err));
  }, [props.school, props.term]);

  useEffect(() => {
    setCurrent(courses.filter((c) => props.courses.includes(c)));
  }, [courses, props.courses]);

  const handleInputChange = function (event, value) {
    value.length === 0 ? props.setCourses([]) : props.setCourses(value);
  };

  return (
      <Grid container justify="center">
      {courses.length === 0 ? (
          <Skeleton animation="wave" />
        ) : (
        <Autocomplete
          multiple
          id="fixed-tags-demo"
          options={courses}
          limitTags={2}
          getOptionLabel={(option) => `${option.courseName} ${option.title}`}
          renderOption={(option) => (
            <ListItemText 
                  key={option.courseName}
                  primary={option.courseName}
                  secondary={option.title}
                  />
          )}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip label={option.courseName} {...getTagProps({ index })} />
            ))
          }
          // groupBy={(option) => option.courseName[0]}
          style={{ width: 500 }}
          onChange={handleInputChange}
          value={current}
          key="coursesearch"
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search for courses"
              variant="outlined"
              placeholder="Courses"
            />
          )}
        />)}
      </Grid>
  );
}
