import React from "react";
import { Link } from "react-router-dom";

import { Container, RepositoryOwner } from "./styles";

const RepositoryDetail = () => {
  return (
    <Container>
      <Link to="/">
        <RepositoryOwner>Nome do usuario/Nome do repo</RepositoryOwner>
      </Link>
      <ul>
        <li />
      </ul>
    </Container>
  );
};

export default RepositoryDetail;
