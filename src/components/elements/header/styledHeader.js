import styled from "styled-components";

import { StyledContainer } from "../../styles/styledContainers";

export const StyledHeaderContainer = styled(StyledContainer)`
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  background: #483838;
  
  .currencies-list {
    display: flex;
    align-items: center;
    grid-gap: 15px;

    .currency {
      color: #ffffff;
      display: flex;
      grid-gap: 5px;
      
      &__name {
        text-transform: uppercase;
      }
    }
  }
  
  @media screen and (max-width: 768px) {
    .currencies-list {
      font-size: 12px;
    }
  }
`;
