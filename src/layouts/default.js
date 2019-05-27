import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Loading from "../components/Loading";
import { Container } from "./styles";

const DefaultLayout = ({ component: Component, isLoading, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        render={matchProps => (
          <Container>
            {isLoading && <Loading />}
            <Component {...matchProps} />
          </Container>
        )}
      />
    </>
  );
};

const mapStateToProps = state => ({
  isLoading: state.users.isLoading
});
export default connect(mapStateToProps)(DefaultLayout);
