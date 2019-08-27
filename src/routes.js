import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../src/components/Auth/Auth";
import DashBoard from "../src/components/Dashboard/Dashboard";
import Form from "../src/components/Form/Form";
import Post from "../src/components/Post/Post";

export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/dashboard" component={DashBoard} />
    <Route path="/post/:postid" component={Post} />
    <Route path="/new" component={Form} />
  </Switch>
);
