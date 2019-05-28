import React from "react";
import PropTypes from "prop-types";

import { Container, SearchIcon, Placeholder, Input } from "./styles";

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
