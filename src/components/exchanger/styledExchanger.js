import styled from "styled-components";

export const StyledExchangerWrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border: 1px solid rgba(21, 45, 52, 0.5);
  border-radius: 15px;
  .exchanger__currencies {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    p {
      font-weight: 600;
      font-size: 18px;
    }
  }
`;