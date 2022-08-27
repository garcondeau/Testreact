import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import RatesTable from "./RatesTable";
import CustomSelect from "../elements/customSelect/CustomSelect";
import { responseStatus } from "../../utils/consts";

import { StyledRatesContainer, StyledRatesWrapper } from "./styledRates";
import { StyledMainTitle } from "../styles/styledTitle";

const RatesContainer = () => {
  const [loading, setLoading] = useState(false);
  const [currencies] = useState([]);
  const [sellingCurrency, setSellingCurrency] = useState({});

  const fetchCurrencies = () => {
    setLoading(true);
    axios.get(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json").
      then(response => {
        if (response.status === responseStatus.HTTP_OK) {

          for (let i = 0; i < Object.keys(response.data).length; i++) {
            currencies[i] = { value: Object.keys(response.data)[i], label: Object.values(response.data)[i] };
          }
          console.log(currencies);
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
    fetchCurrencies();
  }, currencies);

  const onChangeSelect = (value) => {
    setSellingCurrency(value);
  };

  return (
    <StyledRatesContainer wrapper="content">
      <Helmet>
        <title>Rates | Currency exchanger</title>
      </Helmet>
      <StyledRatesWrapper>
        <StyledMainTitle mb="20" size="22" position="center">
          Rates
        </StyledMainTitle>
        <small>Select currency</small>
        <CustomSelect
          name="sellingCurrency"
          value={sellingCurrency}
          onChange={(value) => onChangeSelect(value)}
          options={currencies}
          disabled={loading}
        />
        {
          sellingCurrency.value &&
          <RatesTable
            sellingCurrency={sellingCurrency.value}
          />
        }
      </StyledRatesWrapper>
    </StyledRatesContainer>
  );
};

export default RatesContainer;
