import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container, SearchIcon, Placeholder } from "./styles";

const Input = styled.input`
  height: 36px;
  padding: 16px 8px;
  position: relative;
  font-size: 16px;
  border: 0;
  width: 100%;
  max-width: 768px;
  outline: none;
  border-bottom: 1px solid black;
  &[type="search"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    text-indent: 28px;
  }
  &:focus {
    border-bottom: 1px solid var(--hover-blue);
    transition: all 0.2s ease-in;
  }
  &:focus ~ ${Placeholder} {
    top: -16px;
    font-size: 14px;
    font-family: medium;
    color: var(--hover-blue);
  }
  &:focus ~ ${SearchIcon} {
    color: var(--hover-blue);
  }
  ${props =>
    props.value &&
    `& ~ ${Placeholder} {
      top: -16px;
      font-size: 14px;
      font-family: medium;
    }`}
  ::placeholder {
    color: var(--grey);
  }
  :disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const InputSearch = ({
  value,
  onInput,
  onKeyPress,
  onChange,
  placeholder
}) => {
  return (
    <Container>
      <Input
        type="search"
        value={value}
        onInput={onInput}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <SearchIcon />
      <Placeholder>{placeholder}</Placeholder>
    </Container>
  );
};

InputSearch.defaultProps = {
  value: "",
  onInput: function() {},
  onChange: function() {},
  onKeyPress: function() {}
};
InputSearch.propTypes = {
  value: PropTypes.string,
  onInput: PropTypes.func,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func
};

export default Input;
