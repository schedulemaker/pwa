import { observer } from "mobx-react";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import awsconfig from '../aws-exports';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import IndexPage from "../components/Index";
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
Amplify.configure(awsconfig);


export enum Routes {
    Index = "/",
}

@observer
class RouterComponent extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path={Routes.Index} exact component={IndexPage} />
                </Switch>
            </Router>
        );
    }
}

export default RouterComponent;
