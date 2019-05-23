import React, { useState } from "react";
import PropTypes from "prop-types";

import { Route } from "react-router-dom";
import Header from "../components/Header";
import RepositoryService from "../services/repository";

const DefaultLayout = ({ component: Component, ...rest }) => {
  const [input, setInput] = useState("");

  const handleInput = e => {
    const { value } = e.target;
    setInput(value);

    RepositoryService.searchUsers({ username: value })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Route
      {...rest}
      render={matchProps => (
        <div className="DefaultLayout">
          <Header handleInput={handleInput} value={input} />
          <Component {...matchProps} />
          {/* <Sidebar /> */}
        </div>
      )}
    />
  );
};

export default DefaultLayout;
