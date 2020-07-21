/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import awsconfig from "../../aws-exports";
import { getCourseList } from "../../graphql/queries";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { Chip, TextField, Grid, ListSubheader, ListItemText, Typography } from "@material-ui/core";
import { Autocomplete, Skeleton } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
Amplify.configure(awsconfig);

export default function FixedTags(props) {
  const [current, setCurrent] = useState([]);

  useEffect(() => {
    setCurrent(props.courseList.filter((c) => props.courses.includes(c)));
  }, [props.courseList, props.courses]);

  const handleInputChange = function (event, value) {
    value.length === 0 ? props.setCourses([]) : props.setCourses(value);
  };

  const renderGroup = (params) => [
    <ListSubheader key={params.key} component="div">
      {params.group}
    </ListSubheader>,
    params.children,
  ];

  return (
      <Grid container justify="center">
      {props.courseList.length === 0 ? (
          <Skeleton animation="wave" />
        ) : (
        <Autocomplete
          multiple
          id="course-search"
          options={props.courseList.sort((a,b) => a.courseName > b.courseName)}
          limitTags={2}
        //   renderGroup={renderGroup}
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
          groupBy={(option) => option.courseName.split('-')[0]}
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
