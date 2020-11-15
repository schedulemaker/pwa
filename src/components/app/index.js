import React, {useState} from "react";
import "antd/dist/antd.css";
import Nav from '../nav';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

function reducer(state=initialState, action){
    switch (action.type) {
        case 'SET_COURSES':
            return {
                ...state,
                courses: action.courses,
            };
    
        default:
            return state;
    }
}

const initialState = {
    courses: [],
    timeblocks: []
}

const store = createStore(reducer);

export default function App(){
    return (
        <Provider store={store}>
            <Nav/>
        </Provider>
    )
}