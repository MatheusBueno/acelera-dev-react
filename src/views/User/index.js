<<<<<<< HEAD
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

  useEffect(() => {
    getCreatedAtRepositories(repositoriesList);
    console.log(repositoriesList);
  }, [repositoriesList]);

  const getCreatedAtRepositories = repositories => {
    let _years = [];

    repositories.forEach(repo => {
      // get repo Year
      const year = repo.created_at.substr(0, 4);

      const currentYear = _years.find(y => y && y.year === year);

      // verify if year is not in _years
      currentYear === undefined
        ? _years.push({ year, count: 1 })
        : _years.forEach(y => y.year === year && y.count++);
    });

    // Sort years order from highest to lowest
    _years.sort((a, b) => (b.year > a.year ? 1 : a.year > b.year ? -1 : 0));
    _years = [{ year: "Todos", count: repositories.length }, ..._years];
    setYears(_years);
  };

  return (
    <Container>
      <Sidebar years={years} user={user} />

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
