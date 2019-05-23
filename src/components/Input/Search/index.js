import React from "react";
import Input from "../index";
import { Container, SearchIcon } from "./styles";

const SearchInput = ({ input, handleInput }) => {
  return (
    <Container>
      <Input type="search" value={input} onChange={handleInput} />
      <SearchIcon />
    </Container>
  );
};

export default SearchInput;
