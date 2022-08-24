import React from "react";
import Logo from "../logo/Logo";
import { StyledHeaderContainer } from "./styledHeader";

const Header = () => {
  return (
    <StyledHeaderContainer>
      <Logo />
    </StyledHeaderContainer>
  );
};

export default Header;
