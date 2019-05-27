import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./styles";
import { InputSearch } from "../Input";
import Button from "../Button";

const Header = ({
  inputSearchValue,
  handleInput,
  enterPressCheck,
  handleSearch,
  isFull,
  placeholder
}) => {
  return (
    <HeaderContainer full={isFull}>
      <InputSearch
        onChange={handleInput}
        onKeyPress={enterPressCheck}
        value={inputSearchValue}
        placeholder={placeholder}
      />
      <Button onClick={handleSearch}>Search</Button>
    </HeaderContainer>
  );
};

Header.defaultProps = {
  inputSearchValue: "",
  isFull: true,
  handleInput: function() {},
  enterPressCheck: function() {},
  handleSearch: function() {}
};

Header.propTypes = {
  inputSearchValue: PropTypes.string,
  isFull: PropTypes.bool,
  handleInput: PropTypes.func,
  enterPressCheck: PropTypes.func,
  handleSearch: PropTypes.func
};

export default Header;
