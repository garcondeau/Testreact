import React from "react";

import { StyledSidebarItem, StyledSidebarLink } from "./styledSidebar";

const SidebarItem = ({ as, to, icon, linkTitle, handleChange, exact, badge }) => {

  return (
    <StyledSidebarItem badge={badge}>
      <StyledSidebarLink
        exact={exact}
        as={as}
        to={to}
        onClick={handleChange}
        className="sidebar-link lo"
        activeClassName="sidebar-link_current"
      >
        <div className="sidebar-link__icon">
          <span className={`icon-${icon}`}/>
        </div>
        <div className="sidebar-link__title">
          {linkTitle}
        </div>
      </StyledSidebarLink>
    </StyledSidebarItem>
  );
};

export default SidebarItem;