import React from "react";

import { Container, Avatar, Username } from "./styles";
import Nicolas from "../../assets/img/Nicolas-Cage.jpg";

import { Years, Year } from "./styles";

const Sidebar = ({ user, years }) => {
  const renderYears = years =>
    years.map((year, i) => (
      <Year key={i.toString()}>
        <span>{year.year}</span>
        <span> {year.count} </span>
      </Year>
    ));

  return (
    <Container>
      <Avatar src={user ? user.avatar_url : Nicolas} />
      <Username> {user ? user.login : "Nicolas"} </Username>

      <Years>
        {renderYears(years)}
        <Year />
      </Years>
    </Container>
  );
};

Sidebar.defaultProps = {
  years: [],
  user: {}
};

export default Sidebar;
