import React from "react";
import PropTypes from "prop-types";

import { Route } from "react-router-dom";
import Header from "../components/Header";

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div className="DefaultLayout">
          <Header />
          <Component {...matchProps} />
          {/* <Sidebar /> */}
        </div>
      )}
    />
  );
};

export default DefaultLayout;
