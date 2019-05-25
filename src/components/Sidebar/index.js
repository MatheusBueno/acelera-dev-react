import React from "react";

import { Container, Avatar, Username } from "./styles";
import Nicolas from "../../assets/img/Nicolas-Cage.jpg";

const Sidebar = ({ user }) => {
  return (
    <Container>
      <Avatar src={user ? user.avatar_url : Nicolas} />
      <Username> {user ? user.login : "Nicolas"} </Username>
    </Container>
  );
};

export default Sidebar;
