import styled from "styled-components";

export const StyledTable = styled.div`
  font-size: ${({ size }) => size ? size + "px" : "16px"};
  ${({ width }) => width && `min-width: ${width}px`};
  ${({ width }) => width && "width: 100%"};
  ${({ width }) => width && "overflow-x: hidden;"};
`;

export const StyledTableHead = styled.div`
  padding: 20px 15px 25px;
  color: #193636;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(${({ col }) => col}, 1fr);
  grid-column-gap: 15px;
  font-weight: 600;
  @media screen and (max-width: 992px) {
    display: ${({ scroll }) => scroll === "auto" ? "grid" : "none"};
  }
`;

export const StyledTableBody = styled.div``;

export const StyledTableRow = styled.div`
  ${({ cursor }) => cursor && `cursor: ${cursor}`};
  padding: 15px;
  color: #717A86;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(${({ col }) => col}, 1fr);
  grid-column-gap: 15px;
  border-top: 1px solid #F1F1F1;
  &:nth-child(2n) {
    background-color: rgba(0,0,0,0.1);
  }
  &:last-child {
    border-bottom: 1px solid #F1F1F1;
  }
  &:hover {
    background: rgba(236, 238, 238, 0.4);
  }

  ${({ cursor }) => cursor && `
    cursor: ${cursor};
    &:hover {
      background: rgba(236, 238, 238, 0.5) !important;
    }
  `};

  @media screen and (max-width: 992px) {
    grid-template-rows: ${({ scroll }) => scroll === "auto"
  ? "1fr"
  : `repeat(${({ col }) => col}, minmax(50px, auto))`};
    grid-template-columns: ${({ scroll }) => scroll === "auto" ? `repeat(${({ col }) => col}, 150px)` : "1fr"};
    ${({ scroll }) => scroll === "auto" ? `
       & > div {
         &:before {display: none};
        }
    ` : `
      margin-bottom: 20px;
      padding: 15px 20px;
      position: relative;
      border-bottom: 1px solid #F1F1F1;
      &:nth-child(2n) {
        background-color: #F7F8F8;
      }
      & > div {
        padding: 0 0 0 50%;
        &:not(:last-child) {
          margin-bottom: 25px;
        }
      }
      .table-actions {
        padding: 0;
        position: absolute;
        top: 7px;
        right: 7px;
        z-index: 1;
        &:before {
          display: none !important;
        }
      }
    `};
  }

  @media screen and (max-width: 576px) {
    ${({ scroll }) => scroll === "auto" ? `
    ` : `
      margin-bottom: 15px;
      padding: 12px 10px;
      & > div {
        padding: 25px 0 0 0;
        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    `};
  }
`;

export const StyledCol = styled.div`
  display: ${({ inline }) => inline ? "inline-flex" : "grid"};
  align-items: center;
  position: relative;
  &:before {
    content: attr(data-title) ':';
    color: #193636;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.4px;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    @media screen and (max-width: 992px) {
      display: block;
    }
  }
`;
