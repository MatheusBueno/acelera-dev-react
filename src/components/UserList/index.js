import React from "react";
import PropTypes from "prop-types";
import { Container, P } from "./styles";
import UserItem from "../UserItem";

const UserList = ({ users, selectUser }) => (
  <Container>
    {users.length ? (
      users.map(user => (
        <UserItem selectUser={selectUser} key={`user-${user.id}`} user={user} />
      ))
    ) : (
      <P>No user with that name found</P>
    )}
  </Container>
);

UserList.defaultProps = {
  users: []
};

UserList.propTypes = {
  users: PropTypes.array
};

export default UserList;
