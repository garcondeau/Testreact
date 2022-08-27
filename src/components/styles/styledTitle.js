import styled from "styled-components";

export const StyledMainTitle = styled.h1`
  ${({ mt }) => mt && `margin-top: ${mt}px`};
  ${({ mb }) => mb && `margin-bottom: ${mb}px`};
  ${({ size }) => size && `font-size: ${size}px`};
  color: ${({ color }) => color || "#193636"};
  font-weight: ${({ weight }) => weight || "700"};
  text-align: ${({ position }) => position || "left"};
  line-height: 30px;
  @media screen and (max-width: 576px) {
    margin-bottom: 15px;
    font-size: 18px;
  }
`;