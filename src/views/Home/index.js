import React, { useState } from "react";
import { connect } from "react-redux";
import { usersActions, usersSelectors } from "../../states/users";

import Header from "../../components/Header";
import UsersBackground from "../../components/UsersBackground";
import UserList from "../../components/UserList";
import Pagination from "../../components/Pagination";

import { Container, Title, Main } from "./styles";
const Home = props => {
  const { selectUser, pagination, paginate, users, fetchUsers, isLoading } = props;
  const [input, setInput] = useState("");
  const [wasDispatchedSearch, setWasDispatchedSearch] = useState(false);

  const handleInput = e => {
    const { value } = e.target;
    setInput(value);
    setWasDispatchedSearch(false);
  };
  const enterPressCheck = e => {
    return e.key === "Enter" && handleSearch();
  };
  const handleSearch = () => {
    fetchUsers({ query: input });
    setWasDispatchedSearch(true);
  };
  return (
    <>
      <Header
        inputSearchValue={input}
        handleInput={handleInput}
        enterPressCheck={enterPressCheck}
        handleSearch={handleSearch}
        isFull={users && users.length === 0}
        isSearching={isLoading}
        placeholder="Search a github user by the name"
      />
      <UsersBackground users={users}>
        <Main>
          <Container>
            {users.length > 0 && <Title>User results</Title>}
            <UserList
              wasDispatchedSearch={wasDispatchedSearch}
              selectUser={selectUser}
              users={users}
            />
            <Pagination
              pages={pagination.pages}
              page={pagination.page}
              onPaginate={paginate}
            />
          </Container>
        </Main>
      </UsersBackground>
    </>
  );
};

const mapStateToProps = state => ({
  users: usersSelectors.selectUsers(state.users),
  pagination: usersSelectors.selectPagination(state.users),
  isLoading: state.users.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: ({ query }) => dispatch(usersActions.fetchUsers({ query })),
  selectUser: ({ user }) => dispatch(usersActions.selectUser({ user })),
  paginate: page => dispatch(usersActions.paginate({ page }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
