import React, { useState } from "react";

import HeaderContainer from "./styles";
import InputSearch from "../Input/Search";
import Button from "../Button";

const Header = ({ handleInput, input }) => {
  const [isFull, setFull] = useState(true);

  const search = () => setFull(!isFull);
  return (
    <HeaderContainer full={!isFull}>
      <InputSearch
        handleInput={handleInput}
        value={input}
        placeholder="Find a user"
      />
      <Button onClick={search}>Search</Button>
    </HeaderContainer>
  );
};

export default Header;
