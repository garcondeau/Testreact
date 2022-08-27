import React from "react";

import { StyledPagination } from "./styledPagination";

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.round(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledPagination>
      <ul>
        {pageNumbers && pageNumbers.map(number => (
          <li
            className={number === currentPage && "active"}
            key={number}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </StyledPagination>
  );
};

export default Pagination;