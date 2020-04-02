import React from 'react';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

API.graphql(graphqlOperation(queries.getBannerMetadata, {event: {school: "temple", term: 202036, method: "getCampus"}})).then(campus => console.log(campus));
API.graphql(graphqlOperation(queries.getCourses)).then(allCourses => console.log(
  Array.from(
    new Set(allCourses.data.getCourses.map(obj => `${obj.courseName} ${obj.title}`)
  )
)));
API.graphql(graphqlOperation(mutations.createSchedules, {event: {school: "temple", term: 202036, courses: ["CIS-0835", "PHYS-1021"], campus: ["MN", "AMB"]}})).then(result => console.log(result.data.createSchedules));

class App extends React.Component {
  render() {
    return (
      <div>Hello</div>
    );
  }
}

export default App;