import React, {useState} from "react";
import {
    Grid,
    Row,
    Col
} from 'antd';
import CourseSearch from './course-search';


export default function CreateSchedules(props){

    return (
        <Row style={{textAlign: "center"}}>
            <Col span={20} offset={2}>
                <CourseSearch/>
            </Col>
        </Row>
    )
}