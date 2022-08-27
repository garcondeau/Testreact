import React from "react";
import { navbar } from "../../../rbac-consts";

const userRoutes = [
  {
    title: "Home",
    path: "/",
    perform: navbar.HOME,
    icon: "home"
  },
  {
    title: "Rates",
    path: "/rates",
    perform: navbar.RATES,
    icon: "rates"
  }

];

export default userRoutes;