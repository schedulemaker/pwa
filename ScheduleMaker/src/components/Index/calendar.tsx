import React from 'react'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import events from './events'
import * as dates from './dates'
import moment from "moment"
import {observer} from "mobx-react";


const localize = momentLocalizer(moment);



const ColoredDateCellWrapper = ({ children }) =>
    React.cloneElement(React.Children.only(children), {
        style: {
            backgroundColor: 'lightblue',
        },
    })

let allViews = Object.keys(Views).map(k => Views[k])

@observer
class Basic extends React.Component {
    render() {
        return (
            <Calendar
                events={events}
                views={[Views.MONTH, Views.WEEK, Views.DAY]}

                step={60}
                showMultiDayTimes
                max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
                defaultDate={new Date(2015, 3, 1)}
                components={{
                    timeSlotWrapper: ColoredDateCellWrapper,
                }}
                localizer={localize}
            />
        );
    }
}

export default Basic
