import React from "react";
import { Helmet } from "react-helmet-async";
import Exchanger from "../exchanger/Exchanger";

import { StyledHomeContainer, StyledHomeWrapper } from "./styledHome";
import { StyledMainTitle } from "../styles/styledTitle";

const HomeContainer = () => {
  return (
    <StyledHomeContainer>
      <Helmet>
        <title>Home | Currency exchanger</title>
      </Helmet>
      <StyledHomeWrapper>
        <StyledMainTitle mb="20" size="22" position="center">
          Exchanger
        </StyledMainTitle>
        <Exchanger/>
      </StyledHomeWrapper>
    </StyledHomeContainer>
  );
};

export default HomeContainer;
