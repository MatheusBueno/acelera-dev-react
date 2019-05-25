import React from "react";
import styled from "styled-components";
import { Container, SearchIcon } from "./styles";

const Input = styled.input`
  height: 36px;
  padding: 16px 8px 16px 8px;
  position: relative;
  font-size: 16px;
  border: 0;
  width: 100%;
  max-width: 768px;
  &[type="search"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    text-indent: 28px;
  }
  ::placeholder {
    color: var(--grey);
  }
  :disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const InputSearch = ({ input, handleInput }) => {
  return (
    <Container>
      <Input type="search" value={input} onChange={handleInput} />
      <SearchIcon />
    </Container>
  );
};

export default Input;
