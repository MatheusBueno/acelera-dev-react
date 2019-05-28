import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import DefaultLayout from "../layouts/default";
import Home from "../views/Home";
import User from "../views/User";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultLayout path="/" exact component={Home} />
        <DefaultLayout path="/user/:userName" component={User} />
      </Switch>
    </BrowserRouter>
  );
};
