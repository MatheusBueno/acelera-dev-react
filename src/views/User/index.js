import React, { useEffect } from "react";

import { connect } from "react-redux";

import { usersActions, usersSelectors } from "../../states/users";
import { repositoryActions, repositorySelectors } from "../../states/repos";

import Sidebar from "../../components/Sidebar";
import RepositoryList from "../../components/RepositoryList";
import { Container, Content } from "./styles";
import {
  saveItemInLocalStorage,
  getItemFromLocalStorage
} from "../../utils/utils";

const User = ({ user, repositoriesList, fetchRepository, selectUser }) => {
  useEffect(() => {
    console.log(user);

    // If refresh page user is undefined
    // So get user from localStorage
    if (user) {
      saveItemInLocalStorage("userStorage", user);
      fetchRepository({ query: user.login });
    } else {
      const userStorage = getItemFromLocalStorage("userStorage");
      selectUser({ user: userStorage });
      fetchRepository({ query: userStorage.login });
    }
  }, []);

  return (
    <Container>
      <Sidebar user={user} />
      <Content>
        <RepositoryList repositoriesList={repositoriesList} />
      </Content>
    </Container>
  );
};

const mapStateToProps = state => ({
  user: usersSelectors.selectUser(state),
  repositoriesList: repositorySelectors.selectUserRepositories(state)
});

const mapDispatchToProps = dispatch => ({
  fetchRepository: ({ query }) =>
    dispatch(repositoryActions.fetchUserRepositories({ query })),
  selectUser: ({ user }) => dispatch(usersActions.selectUser({ user }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
