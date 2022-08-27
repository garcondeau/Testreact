import styled from "styled-components";

const colorButton = {
  color: String,
  border: Boolean
};

const styleButton = (color, border) => {
  switch (color) {
    case "main":
      return `
        color: ${border ? "#112031" : "#fff"};
        background-color: ${border ? "transparent" : "#112031"};
        border: 2px solid #112031;
        &:hover {
          background-color: ${border ? "rgba(25, 54, 54, 0.1)" : "#1d3652"};
          border: 2px solid #1d3652;
        }
    `;
    case "neutral":
      return `
        color: ${border ? "#8C9B9B" : "#fff"};
        background-color: ${border ? "transparent" : "#8C9B9B"};
        border: 2px solid #8C9B9B;
        &:hover {
          background-color: ${border ? "rgba(140, 155, 155, 0.1)" : "#7B8585"};
          border: 2px solid #7B8585;
        }
    `;
    case "success":
      return `
        color: ${border ? "#345B63" : "#112031"};
        background-color: ${border ? "transparent" : "#D4ECDD"};
        border: 2px solid #D4ECDD;
        &:hover {
          color: ${border ? "#345B63" : "#ffffff"};
          background-color: ${border ? "rgba(94, 158, 108, 0.1)" : "#6a9178"};
          border: 2px solid #6a9178;
        }
     `;
    case "danger":
      return `
        color: ${border ? "#D25C65" : "#fff"};
        background-color: ${border ? "transparent" : "#D25C65"};
        border: 2px solid #D25C65;
        &:hover {
          background-color: ${border ? "rgba(210, 92, 101, 0.1)" : "#C93328"};
          border: 2px solid #C93328;
        }
      `;
    case "warning":
      return `
        color: ${border ? "#202020" : "#fff"};
        background-color: ${border ? "transparent" : "#FEB967"};
        border: 2px solid #FEB967;
        &:hover {
          background-color: ${border ? "rgba(254, 185, 103, 0.1)" : "#EAA85A"};
          border: 2px solid #EAA85A;
        }
     `;
    case "info":
      return `
        color: ${border ? "#44B5B4" : "#fff"};
        background-color: ${border ? "transparent" : "#44B5B4"};
        border: 2px solid #44B5B4;
        &:hover {
          background-color: ${border ? "rgba(68, 181, 180, 0.1)" : "#3BC7C6"};
          border: 2px solid #3BC7C6;
        }
     `;
    case "help":
      return `
        color: ${border ? "#193636" : "#fff"};
        background-color: ${border ? "transparent" : "#193636"};
        border: 2px solid #193636;
        &:hover {
          background-color: ${border ? "rgba(20, 115, 115, 0.24)" : "#1a4e4e"};
          border: 2px solid #1a4e4e;
        }
    `;
    case "white":
      return `
        color: ${border ? "#fff" : "#262626"};
        background-color: ${border ? "transparent" : "#fff"};
        border: 2px solid #fff;
        &:hover {
          background-color: ${border ? "rgba(255, 255, 255, 0.15)" : "#fff"};
          border: 2px solid #fff;
        }
      `;
    default:
      return `
        color: #323233;
        background: transparent;
        border: 2px solid #323233;
        &:hover {
          background-color: rgba(55, 55, 55, 0.15);
          border: 2px solid #4e4e4e;
        }
      `;
  }
};

export const StyledButton = styled("button", colorButton)`
  ${({ mt }) => mt && `margin-top: ${mt}px`};
  ${({ mb }) => mb && `margin-bottom: ${mb}px`};
  ${({ width }) => width && `width: ${width}px`};
  ${({ size }) => size && `font-size: ${size}px`};
  padding: ${({ figure }) => figure === "circle" ? "12px" : "8px 16px"};
  font-weight: ${({ weight }) => weight || "500"};
  text-align: center;
  vertical-align: middle;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ figure }) => figure === "circle" ? "50%" : "5px"};
  outline: none;
  cursor: pointer;
  transition: all .3s ease;
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
  ${({ disabled }) => disabled && `
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.7;
    transform: scale(1) !important;
  `};

  ${({ color, border }) => styleButton(color, border)}
  &:active {
    transform: scale(0.948) translateZ(0);
  }
`;