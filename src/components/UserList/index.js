import React from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";
import UserItem from "../UserItem";

const UserList = ({ users, selectUser }) => (
  <Container>
    {users.slice(0, 6).map(user => (
      <UserItem selectUser={selectUser} key={`user-${user.id}`} user={user} />
    ))}
  </Container>
);

UserList.defaultProps = {
  users: []
};

UserList.propTypes = {
  users: PropTypes.array
};

export default UserList;
