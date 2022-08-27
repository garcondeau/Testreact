import styled from "styled-components";

export const StyledPagination = styled.nav`
  margin-top: 30px;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
    grid-gap: 10px;

    li {
      height: 30px;
      width: 30px;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #345B63;
      border-radius: 50%;
      cursor: pointer;

      &.active {
        color: #D4ECDD;
        background-color: #345B63;
        cursor: default;
      }
    }
  }
`;