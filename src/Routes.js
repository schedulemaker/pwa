import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import NotFound from "./components/not-found";
import AuthenticatedRoute from "./components/authenticatedroute";
import UnauthenticatedRoute from "./components/unauthenticatedroute";
import Settings from './components/settings/';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <NotFound />
      
    </Switch>
  );
}