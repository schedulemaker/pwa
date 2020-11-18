import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Card,
  Form,
  TimePicker,
  
  Checkbox,
  DatePicker,
} from "antd";


const dayOptions = [
  { label: "Sunday", value: "sunday" },
  { label: "Monday", value: "monday" },
  { label: "Tuesday", value: "tuesday" },
  { label: "Wednesday", value: "wednesday" },
  { label: "Thursday", value: "thursday" },
  { label: "Friday", value: "friday" },
  { label: "Saturday", value: "saturday" },
];

function mapStateToProps(state, ownProps){
    const key = {ownProps};
    return {
        ...state.timeblocks.blocks[key]
    }
}

function TimeBlock(props) {
  
    const {dates, days, times} = props;

    const handleDatesChange = (dates, dateStrings) => {
        console.log(dates);
    };
    const handleTimesChange = (times, timeStrings) => {
        console.log(times);
    };
    const handleDaysChange = (values) => {
        console.log(values);
    };
  
  return (
    
        <Card>
          <Form>
            <Form.Item
              label="Dates"
              name="dates"
              rules={[
                { required: true, message: "Please select start/end dates" },
              ]}
            >
              <DatePicker.RangePicker value={times} onChange={handleDatesChange}/>
            </Form.Item>
            <Form.Item
              label="Days"
              name="days"
              rules={[{ required: true, message: "Please select days" }]}
            >
              <Checkbox.Group
                options={dayOptions}
                value={days}
                onChange={handleDaysChange}
              />
            </Form.Item>
            <Form.Item
              label="Times"
              name="times"
              rules={[
                { required: true, message: "Please select start/end times" },
              ]}
            >
              <TimePicker.RangePicker use12Hours format="h:mm a" value={dates} onChange={handleTimesChange}/>
            </Form.Item>
          </Form>
        </Card>
      
  );
}

export default connect(mapStateToProps)(TimeBlock);
