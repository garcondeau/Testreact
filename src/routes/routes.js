import React from "react";
import HomePage from "../pages/home/HomePage";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";

const routes = [
  {
    title: "Home",
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    title: "Not found page",
    path: "/page-not-found",
    exact: true,
    component: NotFoundPage,
  },
];

export default routes;
