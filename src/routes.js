import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import DefaultLayout from "./layouts/default";
import Home from "./views/Home";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultLayout path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
