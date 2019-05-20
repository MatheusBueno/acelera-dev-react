import React from "react";
import Input from "../index";
import { Container, SearchIcon } from "./styles";

const SearchInput = props => {
  return (
    <Container>
      <Input type="search" {...props} />
      <SearchIcon />
    </Container>
  );
};

export default SearchInput;
