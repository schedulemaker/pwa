import React, {useState} from 'react';
import { Select, List } from 'antd';
import { connect } from 'react-redux';
import courseList from './courses.json';

const { Option, OptGroup } = Select;

function mapStateToProps(state){
    return {
        courses: state.courses
    }
}

const createOption = (course) => {
    return (
        <Option 
            value={`${course.name} - ${course.title}`} 
            label={course.name} 
            key={course.name}>
            <List.Item>
                <List.Item.Meta 
                    title={course.name}
                    description={course.title}
                    />
            </List.Item>
        </Option>
    )
}

const createOptionGroup = (subject, courses) => {
    return (
        <OptGroup label={subject} key={subject}>
            {courses.map(course => createOption(course))}
        </OptGroup>
    )
}

const sorted = courseList.sort((a,b) => a.name.localeCompare(b.name));
const groups = new Map();
sorted.forEach(course => {
    const subject = course.name.split('-')[0];
    if (!groups.has(subject)){
        groups.set(subject, [course]);
    } else groups.get(subject).push(course);
})
const grouped = Array.from(groups).map(([subject, courses]) => createOptionGroup(subject, courses));

function CourseSearch(props){
    const {courses} = props;

    const handleChange = (courses) => {
        props.dispatch({type: 'SET_COURSES', courses: courses})
    }

    return (
        <Select
            mode="multiple"
            style={{width: "100%"}}
            placeholder="Search for courses"
            size="large"
            optionLabelProp="label"
            allowClear
            onChange={handleChange}
            value={courses}
            maxTagCount={4}
        >
            {grouped}
        </Select>
    )
}

export default connect(mapStateToProps)(CourseSearch);