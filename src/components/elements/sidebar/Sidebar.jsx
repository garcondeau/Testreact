import React from "react";
import { ProSidebar, Menu, SidebarContent } from "react-pro-sidebar";
import SidebarLinkList from "./SidebarLinkList";
import "react-pro-sidebar/dist/css/styles.css";

import { StyledSidebarWrapper } from "./styledSidebar";

const Sidebar = ({ menuCollapse }) => {

  return (
    <StyledSidebarWrapper>
      <div id="sidebar">
        <ProSidebar
          rtl={true}
          collapsed={menuCollapse}
        >
          <SidebarContent>
            <Menu>
              <SidebarLinkList/>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </StyledSidebarWrapper>
  );
};

export default Sidebar;