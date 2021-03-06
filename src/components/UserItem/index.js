import React from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Container, Avatar, Title } from "./styles";
import Nicolas from "../../assets/img/Nicolas-Cage.jpg";

const UserItem = ({ user, selectUser }) => {
  const selectAUser = () => {
    selectUser({ user });
  };

  return (
    <Container data-testid="user-component" onClick={selectAUser}>
      <Link to={{ pathname: "/user" }}>
        <Avatar src={user.avatar_url || Nicolas} />
        <Title>{user.login}</Title>
      </Link>
    </Container>
  );
};

UserItem.defaultProps = {
  user: {}
};

UserItem.propTypes = {
  user: PropTypes.object
};

export default UserItem;
