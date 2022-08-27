import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1140px;
  width: 100%;
  ${({ wrapper }) => wrapper === "content" && `min-height: calc(100vh - 65px)`};
  margin: 0 auto;
  padding: 0 15px;
`;
