import React, { useEffect, useState } from "react";
import axios from "axios";
import { responseStatus } from "../../../utils/consts";

const TopCurrencies = () => {
  const [result, setResult] = useState({ eur: "", usd: "", pln: "" });
  const [fetch, setFetch] = useState(false);

  const fetchCurrencies = () => {
    axios.get(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/uah.json").
      then(response => {
        if (response.status === responseStatus.HTTP_OK) {
          setResult({
            eur: response.data.uah.eur,
            usd: response.data.uah.usd,
            pln: response.data.uah.pln
          });
        }
      }).
      catch(error => {
        console.log(error);
        // closableNotification(error.response.data.detail, "error");
      });
  };

  useEffect(() => {
    fetchCurrencies();
  }, [fetch]);

  return (
    <ul className="currencies-list">
      {result && Object.entries(result).map((value, key) => {
        return (
          <li key={key} className="currency">
              <span className="currency__name">
                {value[0]}
              </span>
            <span className="currency__value">
                {(1 / value[1]).toFixed(3)}
              </span>
          </li>
        );
      })}
    </ul>
  );
};

export default TopCurrencies;