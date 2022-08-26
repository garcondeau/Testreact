import styled from "styled-components";

import { StyledContainer } from "../../styles/styledContainers";

export const StyledHeaderWrapper = styled.div`
  background: #152D35;
`;

export const StyledHeaderContainer = styled(StyledContainer)`
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  
  .currencies-list {
    max-width: 80%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    grid-gap: 15px;

    .currency {
      color: #ffffff;
      display: flex;
      grid-gap: 5px;
      
      &__name {
        font-weight: 700;
        text-transform: uppercase;
      }
    }
  }
  
  .sidebar-btn {
    color: #D4ECDD;
    font-size: 26px;
    border: none;
    margin: auto 0;
  }
  
  @media screen and (max-width: 768px) {
    .currencies-list {
      font-size: 12px;
    }
  }
`;
