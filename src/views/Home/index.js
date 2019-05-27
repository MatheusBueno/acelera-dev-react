import React from "react";
import { connect } from "react-redux";

import UsersBackground from "../../components/UsersBackground";
import UserList from "../../components/UserList";
import Pagination from "../../components/Pagination";
import { usersActions, usersSelectors } from "../../states/users";
import { Container, Title } from "./styles";
const Home = props => {
  const { selectUser, pagination, paginate } = props;

  const { users } = props;
  return (
    // <UsersBackground users={users}>
    <Container>
      {users.length > 0 && <Title>User results</Title>}
      <UserList selectUser={selectUser} users={users} />
      <Pagination
        pages={pagination.pages}
        page={pagination.page}
        onPaginate={paginate}
      />
    </Container>
    //</UsersBackground>
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
