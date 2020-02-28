/* eslint-disable react/no-typos */
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import * as ROUTES from "./Constants/routes.jsx";
import Home from "./Containers/Home";
import Tags from "./Containers/Tags";

const App = () => {
  return (
    <div>
      <Redirect from="/" to={ROUTES.HOME} />
      <Route path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.TAGS} component={Tags} />
    </div>
  );
};

export default App;
