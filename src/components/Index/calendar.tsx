import React, { Component } from 'react'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import events from './events'
import * as dates from './dates'
import moment from "moment"
import {observer} from "mobx-react";
import awsconfig from '../../aws-exports';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
Amplify.configure(awsconfig);

const localizer = momentLocalizer(moment);
var schedules = [];


const ColoredDateCellWrapper = ({ children }) =>
    React.cloneElement(React.Children.only(children), {
        style: {
            backgroundColor: 'lightblue',
        },
    })
    

let allViews = Object.keys(Views).map(k => Views[k])

export default class TimeSlots extends Component{

    render(){
        return (
        <Calendar
            events={events}
            step={15}
            timeslots={8}
            localizer={localizer}
            defaultView={Views.WEEK}
            defaultDate={new Date(2015, 3, 12)}
          />
          )
            
    }
}
