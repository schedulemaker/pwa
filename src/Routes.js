import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import NotFound from "./components/not-found";
import Login from "./components/login";
import Signup from "./components/signup";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
    </Route>
    <Route exact path="/signup">
      <Signup />
      </Route> 
      <NotFound />
      
    </Switch>
  );
}