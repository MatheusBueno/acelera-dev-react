import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import { usersActions, usersSelectors } from '../../states/users';
import { repositoryActions, repositorySelectors } from '../../states/repos';

import Sidebar from '../../components/Sidebar';
import RepositoryList from '../../components/RepositoryList';
import { Container } from './styles';
import { saveItemInLocalStorage, getItemFromLocalStorage } from '../../utils/utils';
import Header from '../../components/Header';

const User = ({
  user,
  repositoriesList,
  fetchUserRepositories,
  selectUser,
  filterUserRepositories,
  history
}) => {
  const [years, setYears] = useState([]);

  useEffect(() => {
    if (user) {
      saveItemInLocalStorage('userStorage', user);
      filterUserRepositories('');
      fetchUserRepositories({ query: user.login });
    } else {
      const userStorage = getItemFromLocalStorage('userStorage');
      selectUser({ user: userStorage });
      filterUserRepositories('');
      fetchUserRepositories({ query: userStorage.login });
    }
  }, []);

  useEffect(() => {
    getCreatedAtRepositories(repositoriesList);
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
    _years = [{ year: 'Todos', count: repositories.length }, ..._years];
    setYears(_years);
  };

  const [input, setInput] = useState('');
  const handleInput = e => {
    const { value } = e.target;
    setInput(value);
  };
  const enterPressCheck = e => {
    return e.key === 'Enter' && handleSearch();
  };
  const handleSearch = () => {
    filterUserRepositories(input);
  };
  const onGoBack = () => {
    history.goBack();
  };
  return (
    <Container>
      <Header
        inputSearchValue={input}
        handleInput={handleInput}
        enterPressCheck={enterPressCheck}
        handleSearch={handleSearch}
        isFull={false}
        placeholder="Search for a language in the user repository"
        onGoBack={onGoBack}
      />
      <Sidebar years={years} user={user} />

      <RepositoryList repositoriesList={repositoriesList} />
    </Container>
  );
};

const mapStateToProps = state => ({
  user: usersSelectors.selectUser(state.users),
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
