import React, { useEffect, useState } from "react";
import { StyledCol, StyledTable, StyledTableBody, StyledTableHead, StyledTableRow } from "../styles/styledTable";
import axios from "axios";
import { responseStatus } from "../../utils/consts";

  const RatesTable = ({sellingCurrency}) => {
    const [loading, setLoading] = useState(false)
    const [rates, setRates] = useState([])

    const fetchRates = () => {
      setLoading(true);
      axios.get(
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/"+ sellingCurrency +".json").
        then(response => {
          if (response.status === responseStatus.HTTP_OK) {
            console.log();
            setRates(Object.values(response.data)[1])
            setLoading(false);
          }
        }).
        catch(error => {
          console.log(error);
          setLoading(false);
          // closableNotification(error.response.data.detail, "error");
        });
    };

    useEffect(() => {
      fetchRates();
    }, sellingCurrency);

    console.log(Object.values(rates));

    return (
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
          {Object.entries(rates).map((value) => (
            <StyledTableRow col="2">
              <StyledCol>
                {value[0]}
              </StyledCol>
              <StyledCol>
                {value[1]}
              </StyledCol>
            </StyledTableRow>
          ))}
        </StyledTableBody>
      </StyledTable>
    );
  };

  export default RatesTable;