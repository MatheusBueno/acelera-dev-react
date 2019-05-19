import React from "react";
import { Search } from "react-feather";
import Input from "../index";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const SearchIcon = styled(Search)`
  position: absolute;
  z-index: 1;
  width: 24px;
  height: 24px;
  z-index: 1;
  color: var(--grey);
  left: 5px;
`;

const SearchInput = props => {
  return (
    <Container>
      <Input type="search" {...props}/>
      <SearchIcon />
    </Container>
  );
};

export default SearchInput;
