import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../elements/pagination/Pagination";
import { responseStatus } from "../../utils/consts";

import { StyledCol, StyledTable, StyledTableBody, StyledTableHead, StyledTableRow } from "../styles/styledTable";

const RatesTable = ({ sellingCurrency }) => {
  const [loading, setLoading] = useState(false);
  const [rates, setRates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const fetchRates = () => {
    setLoading(true);
    axios.get(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/" + sellingCurrency + ".json").
      then(response => {
        if (response.status === responseStatus.HTTP_OK) {
          console.log();
          setRates(Object.values(response.data)[1]);
          setLoading(false);
        }
      }).
      catch(error => {
        console.log(error);
        setLoading(false);
        // closableNotification(error.response.data.detail, "error");
      });
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = Object.entries(rates).slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetchRates();
  }, sellingCurrency);

  return (
    <>
      <StyledTable>
        <StyledTableHead col="2">
          <StyledCol>
            Buying currency
          </StyledCol>
          <StyledCol>
            Price
          </StyledCol>
        </StyledTableHead>
        <StyledTableBody>
          {currentPosts.map((value) => (
            <StyledTableRow col="2">
              <StyledCol
                data-title="Buying currency"
              >
                {value[0].toUpperCase()}
              </StyledCol>
              <StyledCol
                data-title="Price"
              >
                {value[1]}
              </StyledCol>
            </StyledTableRow>
          ))}
        </StyledTableBody>
      </StyledTable>
      <Pagination
        itemsPerPage={postsPerPage}
        totalItems={Object.entries(rates).length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};
export default RatesTable;