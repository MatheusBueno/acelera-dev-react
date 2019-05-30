import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./styles";
import { InputSearch } from "../Input";
import Button from "../Button";
import { ArrowLeft } from "react-feather";

const Header = ({
  inputSearchValue,
  handleInput,
  enterPressCheck,
  handleSearch,
  isFull,
  isSearching,
  placeholder,
  onGoBack
}) => {
  return (
    <HeaderContainer full={isFull}>
      {onGoBack && (
        <Button icon style={{ marginRight: "20px" }} onClick={onGoBack}>
          <ArrowLeft />
        </Button>
      )}

      <InputSearch
        onChange={handleInput}
        onKeyPress={enterPressCheck}
        value={inputSearchValue}
        placeholder={placeholder}
      />
      <Button onClick={handleSearch}>{!!isSearching ? 'Searching' : 'Search'}</Button>
    </HeaderContainer>
  );
};

Header.defaultProps = {
  inputSearchValue: "",
  placeholder: "",
  isFull: true,
  isSearching: false,
  handleInput: function() {},
  enterPressCheck: function() {},
  handleSearch: function() {}
};

Header.propTypes = {
  inputSearchValue: PropTypes.string,
  isFull: PropTypes.bool,
  isSearching: PropTypes.bool,
  handleInput: PropTypes.func,
  enterPressCheck: PropTypes.func,
  handleSearch: PropTypes.func,
  placeholder: PropTypes.string,
  onGoBack: PropTypes.func
};

export default Header;
