import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";

import { StyledLogoWrapper } from "./styledLogo";

const Logo = () => {
  return (
    <NavLink to="/">
      <StyledLogoWrapper>
        <img src={logo} alt="logo" />
        <div className="logo__name">IXCOIN</div>
      </StyledLogoWrapper>
    </NavLink>
  );
};

export default Logo;
