import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import {Home, People, Settings} from "@material-ui/icons";


export default function BotNav(props){
    return(
        <BottomNavigation value ={props.value} onChange ={(e, tab) =>props.onChange(tab)}>
            <BottomNavigationAction icon ={<Home />} /> 
            <BottomNavigationAction icon ={<People />} disabled={props.disableCalendarView}/>
            <BottomNavigationAction icon ={<Settings />} />
        </BottomNavigation>
    );
}