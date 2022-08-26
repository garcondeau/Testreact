import React from "react";
import Logo from "../logo/Logo";
import { StyledHeaderContainer } from "./styledHeader";
import TopCurrencies from "./TopCurrencies";

const Header = () => {
  return (
    <StyledHeaderContainer>
      <Logo />
      <TopCurrencies/>
    </StyledHeaderContainer>
  );
};

export default Header;
