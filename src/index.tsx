import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'
import "react-big-calendar/lib/css/react-big-calendar.css"
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import App from './App';
// import gql from 'graphql-tag';
// import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

// API.graphql(graphqlOperation(queries.getCourses)).then()

// client.query({
//     query: gql(getCourses)
// }).then(({ data }) => {
//     console.log(data);
// });
ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();
