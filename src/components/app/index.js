import React, {useState} from "react";
import "antd/dist/antd.css";
import Nav from '../nav';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const initialState = {
    courses: [],
    timeblocks: {
        count: 0,
        blocks: {}
    },
}

function reducer(state=initialState, action){
    try {
        return reducers[action.type](state, action);
    } catch (error) {
        console.error(`Invalid action: ${action.type}`);
        return state;
    }
}

const store = createStore(reducer);

export default function App(){
    return (
        <Provider store={store}>
            <Nav/>
        </Provider>
    )
}