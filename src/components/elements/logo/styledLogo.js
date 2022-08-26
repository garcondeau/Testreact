import styled from "styled-components";

export const StyledLogoWrapper = styled.div`
  height: 100%;
  color: #ffffff;
  display: flex;
  grid-gap: 5px;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.02);
    img {
      transform: rotate(180deg);
    }
  }

  .logo__name {
    font-size: 28px;
    font-weight: 700;
  }

  img {
    width: 45px;
    object-position: center;
    object-fit: contain;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 40px;
    }
    .logo__name {
      display: none;
    }
  }
`;
