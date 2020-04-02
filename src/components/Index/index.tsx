import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Button,
    Container,
    Divider, Form,
    Grid,
    Header,
    Icon,
    Image, Input,
    List,
    Menu, Modal,
    Responsive, Search,
    Segment,
    Sidebar, Tab,
    Visibility,
} from 'semantic-ui-react'
import {observer} from "mobx-react";
import {withRouter} from "react-router";
import store from "./store";
import MessageComponent from "../message";
import Chart from "chart.js";
import CalendarComponent from "./calendar";
import SearchComponent from "./search";
import awsconfig from '../../aws-exports';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
Amplify.configure(awsconfig);

@observer
class HomepageHeading extends Component<any, any> {
    myChart = null;

    componentDidMount(): void {
    }

    render() {
        return (
            <Container style={{ margin: "3em 5em 5em 5em"}}>
                <HeaderComponent/>

                {/*<CalendarComponent/>*/}
                <SchedulesComponent/>

            </Container>
        );
    }
}

@observer
class HeaderComponent extends Component {
    render() {
        return (
            <Segment placeholder>
                <Grid columns={2} stackable textAlign='center'>
                    <Divider vertical>Or</Divider>

                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column>
                            <Header icon>
                                <Icon name='search' />
                                Find Class
                            </Header>
                            <SearchComponent>

                            </SearchComponent>
                            {/*<Search placeholder='Search classes...' />*/}
                            
                        </Grid.Column>

                        <Grid.Column>
                            <Header icon>
                                <Icon name='calendar' />
                                Add New Schedule
                            </Header>

                            <Modal
                                trigger={<Button primary>Add Schedule</Button>}
                                header='Create a new Schedule!'
                                content={
                                    <Form style={{ margin: "2em"}}>
                                        <Form.Field
                                            value={store.scheduleName}
                                            onChange={(e, s) => store.changeName(s.value)}
                                            control={Input}
                                            label={<h2>Schedule Name</h2>}
                                            placeholder='The name of your schedule'
                                        />
                                    </Form>

                                }
                                actions={['Cancel', { onClick: () => store.addSchedule(), key: 'create', content: 'Create', positive: true }]}
                            />

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}

const panes = [
    { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

@observer
class SchedulesComponent extends Component {
    render() {

        const data = []
        for (const s of store.scheduleArray) {
            console.log(s)
            data.push({ menuItem: s[0], render: () => <Tab.Pane style={{height: "600px", width: "1300px"}}> <CalendarComponent/> </Tab.Pane> })
        }

        return (
            <Tab
                panes={data}
            />
        )
    }
}

export default withRouter(HomepageHeading)
