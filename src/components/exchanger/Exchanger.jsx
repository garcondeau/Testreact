import React, { useEffect, useState } from "react";
import axios from "axios";
import InputGroup from "../elements/inputGroup/InputGroup";
import Tooltip from "rc-tooltip";
import { currencies, regex, responseStatus } from "../../utils/consts";
import { validateValue } from "../../utils/validator";
import CustomSelect from "../elements/customSelect/CustomSelect";

import { StyledExchangerWrapper } from "./styledExchanger";
import { StyledButton } from "../styles/styledButton";
import CurrenciesSwap from "./CurrenciesSwap";

const Exchanger = () => {
  const [{ sellingCurrency, buyingCurrency, amount }, setExchangeDetails] = useState(
    { sellingCurrency: "", buyingCurrency: "", amount: "" });
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);
  const [uncompleted, setUncompleted] = useState(true);
  const [errors, setErrors] = useState(null);

  const formDecorator = (send, event) => {
    return function (event) {
      event.preventDefault();

      if (errors["name"] || errors["email"] || errors["phone"] || errors["country"] || errors["message"]) {
        return false;
      } else {
        send.apply();
      }
    };
  };

  const sendExchange = () => {
    setLoading(true);
    axios.get(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/" + sellingCurrency.value + "/" +
      buyingCurrency.value + ".json").
      then(response => {
        if (response.status === responseStatus.HTTP_OK) {
          setResult(Object.values(response.data)[1]);
          setLoading(false);
        }
      }).
      catch(error => {
        console.log(error);
        setLoading(false);
        // closableNotification(error.response.data.detail, "error");
      });
  };

  const onChangeInput = (event) => {
    const { name, attributes, value } = event.target;

    let regexData = attributes.getNamedItem("data-regex").value;

    setErrors((prevState) => ({
      ...prevState,
      [name]: null
    }));

    const regexMap = new Map([
      ["amount", regex.AMOUNT]
    ]);

    regexData = regexMap.get(name);

    if (!validateValue(value, regexData)) {
      setErrors((prevState) => ({
        ...prevState,
        [name]: "Amount must be 111.11 type and contain max 10 symbols"
      }));
    }

    setExchangeDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const onChangeSelect = (value, name) => {
    setResult(null)
    setExchangeDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = formDecorator(sendExchange);

  useEffect(() => {
    if (sellingCurrency && buyingCurrency && amount) {
      setUncompleted(false);
    }
  });

  return (
    <StyledExchangerWrapper>
      <div className="exchanger">
        <div className="exchanger__selling">
          <small>
            Selling currency
          </small>
          <CustomSelect
            placeholder="Sell"
            name="sellingCurrency"
            value={sellingCurrency}
            onChange={(value) => onChangeSelect(value, "sellingCurrency")}
            options={currencies}
            disabled={loading}
          />
          <div className="exchanger__amount">
            <small>
              You sell:
            </small>
            <InputGroup
              id="amount"
              type="text"
              name="amount"
              data-regex={regex.AMOUNT}
              autoComplete="off"
              onChange={onChangeInput}
              required
              error={errors?.["amount"]}
              placeholder={"0.0"}
              disabled={loading}
            />
          </div>
        </div>
        <CurrenciesSwap
          setExchangeDetails={setExchangeDetails}
          sellingCurrency={sellingCurrency}
          buyingCurrency={buyingCurrency}
          setResult={setResult}
        />
        <div className="exchanger__buying">
          <small>
            Buying currency
          </small>
          <CustomSelect
            placeholder="Buy"
            name="sellingCurrency"
            value={buyingCurrency}
            onChange={(value) => onChangeSelect(value, "buyingCurrency")}
            options={currencies}
            disabled={loading}
          />
          <div className="exchanger__values">
            <div className="exchanger__result">
              <small>
                You get:
              </small>
              <p>{result ? (result * amount) : "Submit changes first"}</p>
            </div>
          </div>
        </div>
        <div className="exchanger__footer">
          <Tooltip
            placement="top"
            overlay="Choose selling and buying currencies and enter amount"
          >
            <div className="submit-btn">
              <StyledButton
                width="200"
                color="success"
                onClick={handleSubmit}
                disabled={uncompleted}
              >
                Submit
              </StyledButton>
            </div>
          </Tooltip>
        </div>
      </div>
    </StyledExchangerWrapper>
  );
};

export default Exchanger;