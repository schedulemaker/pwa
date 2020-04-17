import React from "react";
import "./Home.css";
import LoaderButton from '../components/LoaderButton';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../aws-exports';
import Button from '@material-ui/core/Button';
import { Cache } from 'aws-amplify';
Amplify.configure(awsconfig);


const sendScheduleRequest = async () => {
  const result = await API.graphql(graphqlOperation(mutations.createSchedules,{ 
         courses: ["CIS-0835", "PHYS-1021"],
         campuses: "MN",
         school: "temple", 
         term: 202036,  
      }
  ));
  console.log(result["data"]["createSchedules"]);
}




export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <h1>ScheduleMaker</h1>
        <p>Taking the complications out of Making Schedules</p>
        <Button onClick={sendScheduleRequest} >Create Schedule</Button>
      </div>
    </div>
  );
}