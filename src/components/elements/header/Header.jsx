import React, { useState } from "react";
import Logo from "../logo/Logo";
import TopCurrencies from "./TopCurrencies";

import { StyledHeaderContainer, StyledHeaderWrapper } from "./styledHeader";
import Sidebar from "../Sidebar/Sidebar";


const Header = () => {
  const [menuCollapse, setMenuCollapse] = useState(true);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <StyledHeaderWrapper>
      <StyledHeaderContainer>
        <Logo/>
        <TopCurrencies/>
          <Sidebar
            menuCollapse={menuCollapse}
          />
          <button
            className="sidebar-btn"
            onClick={menuIconClick}>
            <span className="icon-menu"/>
          </button>
      </StyledHeaderContainer>
    </StyledHeaderWrapper>
  );
};

export default Header;
