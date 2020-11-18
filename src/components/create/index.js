import React, {useState} from "react";
import {
    Grid,
    Row,
    Col
} from 'antd';
import CourseSearch from './course-search';
import TimeBlocks from './timeblocks';

export default function CreateSchedules(props){

    return (
        <div>
            <Row style={{textAlign: "center"}} gutter={[16,32]}>
            <Col span={20} offset={2}>
                <CourseSearch/>
            </Col>
        </Row>
        <Row style={{textAlign: "center"}} gutter={[16,32]}>
            <Col span={20} offset={2}>
                <TimeBlocks />
            </Col>
        </Row>
        </div>
    )
}