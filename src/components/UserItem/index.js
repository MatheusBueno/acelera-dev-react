import React from "react";
import PropTypes from "prop-types";
import { Container, Avatar, Title } from "./styles";
import Nicolas from "../../assets/img/Nicolas-Cage.jpg";
import { Link } from "react-router-dom";
const UserItem = ({ user }) => (
  <Container>
    <Link to={{ pathname: "/user" }}>
      <Avatar src={user.avatar_url || Nicolas} />
      <Title>{user.login}</Title>
    </Link>
  </Container>
);

UserItem.defaultProps = {
  user: {}
};

UserItem.propTypes = {
  user: PropTypes.object
};

export default UserItem;
