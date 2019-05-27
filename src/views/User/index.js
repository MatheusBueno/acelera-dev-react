import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { usersActions, usersSelectors } from '../../states/users';
import { repositoryActions, repositorySelectors } from '../../states/repos';

import Sidebar from '../../components/Sidebar';
import RepositoryList from '../../components/RepositoryList';
import { Container } from './styles';
import { saveItemInLocalStorage, getItemFromLocalStorage } from '../../utils/utils';

const User = ({
  user,
  filter,
  selectUser,
  repositoriesList,
  fetchUserRepositories,
  filterUserRepositories
}) => {
  useEffect(() => {
    if (user) {
      saveItemInLocalStorage('userStorage', user);
      fetchUserRepositories({ query: user.login });
    } else {
      const userStorage = getItemFromLocalStorage('userStorage');
      selectUser({ user: userStorage });
      fetchUserRepositories({ query: userStorage.login });
    }
  });

  return (
    <Container>
      <Sidebar user={user} />
      <RepositoryList repositoriesList={repositoriesList} />
    </Container>
  );
};

const mapStateToProps = state => ({
  user: usersSelectors.selectUser(state),
  repositoriesList: repositorySelectors.selectUserRepositories(state),
  filter: state.repos.filter
});

const mapDispatchToProps = dispatch => ({
  selectUser: ({ user }) => dispatch(usersActions.selectUser({ user })),
  fetchUserRepositories: ({ query }) =>
    dispatch(repositoryActions.fetchUserRepositories({ query })),
  filterUserRepositories: filter => dispatch(repositoryActions.filterUserRepositories(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
