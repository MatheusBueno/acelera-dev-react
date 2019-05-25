import React from "react";
import PropTypes from "prop-types";
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

export const InputSearch = ({ value, onInput, onKeyPress, onChange }) => {
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
