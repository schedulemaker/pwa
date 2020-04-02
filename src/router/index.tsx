import { observer } from "mobx-react";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import IndexPage from "../components/Index";

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
