/* eslint-disable react/no-typos */
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import * as ROUTES from "./Constants/routes.jsx";
import Home from "./Containers/Home";
import Tags from "./Containers/Tags";

const App = () => {
  return (
    <Switch>
      <Route path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.TAGS} component={Tags} />
      <Redirect from={ROUTES.INDEX} to={ROUTES.HOME} />
    </Switch>
  );
};

export default App;
