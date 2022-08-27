import React from "react";
import SidebarItem from "./SidebarItem";
import { NavLink } from "react-router-dom";
import routesSidebar from "./routesSidebar";

const SidebarLinkList = () => {
  const sidebarRoutes = routesSidebar;

  return (
    <React.Fragment>
      {sidebarRoutes.map((rout, key) => {
        return (
          <SidebarItem
            perform={rout.perform}
            as={NavLink}
            linkTitle={rout.title}
            to={rout.path}
            icon={rout.icon}
            key={key}
          />
        );
      })}
    </React.Fragment>
  );
};

export default SidebarLinkList;