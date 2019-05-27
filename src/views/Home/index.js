import React, { useState } from "react";
import { connect } from "react-redux";
import { usersActions, usersSelectors } from "../../states/users";

import Header from "../../components/Header";
import UsersBackground from "../../components/UsersBackground";
import UserList from "../../components/UserList";
import Pagination from "../../components/Pagination";

import { Container, Title } from "./styles";
const Home = props => {
  const { selectUser, pagination, paginate, users, fetchUsers } = props;

  const [input, setInput] = useState("");
  const handleInput = e => {
    const { value } = e.target;
    setInput(value);
  };
  const enterPressCheck = e => {
    return e.key === "Enter" && handleSearch();
  };
  const handleSearch = () => {
    fetchUsers({ query: input });
  };
  return (
    <>
      <Header
        inputSearchValue={input}
        handleInput={handleInput}
        enterPressCheck={enterPressCheck}
        handleSearch={handleSearch}
        isFull={users && users.length === 0}
        placeholder="Search a github user by the name"
      />
      {/* <UsersBackground users={users}> */}
      <main>
        <Container>
          {users.length > 0 && <Title>User results</Title>}
          <UserList selectUser={selectUser} users={users} />
          <Pagination
            pages={pagination.pages}
            page={pagination.page}
            onPaginate={paginate}
          />
        </Container>
      </main>
      {/* </UsersBackground> */}
    </>
  );
};

const mapStateToProps = state => ({
  users: usersSelectors.selectUsers(state),
  pagination: usersSelectors.selectPagination(state)
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
