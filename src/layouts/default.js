import React, { useState } from "react";
import { connect } from "react-redux";
import actions from "../states/users/actions";
import { Route } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";
import { Main } from "./styles";

const DefaultLayout = ({
  component: Component,
  isLoading,
  users,
  searchUser,
  ...rest
}) => {
  const [input, setInput] = useState("");
  const handleInput = e => {
    const { value } = e.target;
    setInput(value);
  };
  const enterPressCheck = e => {
    return e.key === "Enter" && handleSearch();
  };
  const handleSearch = () => {
    searchUser({ query: input });
  };

  return (
    <>
      <Header
        inputSearchValue={input}
        handleInput={handleInput}
        enterPressCheck={enterPressCheck}
        handleSearch={handleSearch}
        isFull={false}
      />
      <Route
        {...rest}
        render={matchProps => (
          <Main>
            {isLoading && <Loading />}
            <Component {...matchProps} />
          </Main>
        )}
      />
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    searchUser: payload => dispatch(actions.fetchUsers(payload))
  };
};
const mapStateToProps = state => ({
  error: state.error,
  users: state.users.users,
  isLoading: state.users.isLoading
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultLayout);
