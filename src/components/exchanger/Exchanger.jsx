import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";
import InputGroup from "../elements/inputGroup/InputGroup";
import { currencies, regex, responseStatus } from "../../utils/consts";

import { StyledExchangerWrapper } from "./styledExchanger";
import { validateValue } from "../../utils/validator";

const Exchanger = () => {
  const [{ sellingCurrency, buyingCurrency, amount }, setExchangeDetails] = useState(
    { sellingCurrency: "", buyingCurrency: "", amount: "" });
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(true);
  const [errors, setErrors] = useState(null);

  const formDecorator = (send, event) => {
    return function (event) {
      event.preventDefault();

      if (errors["name"] || errors["email"] || errors["phone"] || errors["country"] || errors["message"]) {
        return false;
      }
      else{
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

    console.log(name);
    console.log(errors);

    let regexData = attributes.getNamedItem("data-regex").value;

    setErrors((prevState) => ({
      ...prevState,
      [name]: null
    }));

    const regexMap = new Map([
      ["amount", regex.AMOUNT],
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
    setExchangeDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = formDecorator(sendExchange);

  return (
    <StyledExchangerWrapper>
      <div className="exchanger__currencies">
        <Select
          name="sellingCurrency"
          value={sellingCurrency}
          onChange={(value) => onChangeSelect(value, "sellingCurrency")}
          options={currencies}
          disabled={loading}
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
        >
          test
        </button>
        <Select
          name="sellingCurrency"
          value={buyingCurrency}
          onChange={(value) => onChangeSelect(value, "buyingCurrency")}
          options={currencies}
          disabled={loading}
        />
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
        <div className=""></div>
        <p>{result ? (result * amount) : "0.0"}</p>
      </div>
    </StyledExchangerWrapper>
  );
};

export default Exchanger;