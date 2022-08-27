import styled from "styled-components";

export const StyledExchangerWrapper = styled.div`
  width: 100%;
  padding-bottom: 50px;

  .exchanger {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 40px 1fr;
    gap: 30px;

    &__selling,
    &__buying {
      min-height: 200px;
      padding: 15px 10px;
      background: #ffffff;
      border: 1px solid rgba(21, 45, 52, 0.5);
      border-radius: 15px;
    }

    .swap-btn {
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        width: 32px;
        height: 32px;
        font-size: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        transition: 0.3s;

        &:hover {
          transform: rotate(180deg);
        }
      }
    }

    &__amount,
    &__values {
      padding-top: 35px;

      p {
        padding: 10px 5px 2px;
        width: 100%;
        font-size: 18px;
        font-weight: 600;
        background: transparent;
        border: none;
      }
    }

    &__footer {
      padding-top: 10px;
      display: flex;
      justify-content: center;
      grid-column-start: 1;
      grid-column-end: 4;

      .submit-btn {
        width: 200px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .exchanger {
      grid-template-columns: 1fr;
      gap: 15px;

      &__footer {
        grid-column: 1;
      }
    }
  }
`;