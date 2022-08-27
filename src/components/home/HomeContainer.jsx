import React from "react";
import { Helmet } from "react-helmet-async";

import { StyledHomeContainer, StyledHomeWrapper } from "./styledHome";
import Exchanger from "../exchanger/Exchanger";

const HomeContainer = () => {
  return (
    <StyledHomeContainer>
      <Helmet>
        <title>Home | Currency exchanger</title>
      </Helmet>
      <StyledHomeWrapper>
        <Exchanger/>
      </StyledHomeWrapper>
    </StyledHomeContainer>
  );
};

export default HomeContainer;
