import React, { useState } from "react";
import { StyledExchangerWrapper } from "./styledExchanger";
import Select from "react-select";
import { currencies, responseStatus } from "../../utils/consts";
import axios from "axios";
import InputGroup from "../elements/inputGroup/InputGroup";

const Exchanger = () => {
  const[selectedValue, setSelectedValue] = useState()
  const[selectedOption, setSelectedOption] = useState()
  const[result,setResult] = useState()
  const[amount,setAmount] = useState()

  const testSend = () => {
    axios.get(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/"+selectedValue.value+"/"+selectedOption.value+".json").
      then(response => {
        if (response.status === responseStatus.HTTP_OK) {
          setResult(Object.values(response.data)[1]);
        }
      }).
      catch(error => {
        console.log(error);
        // closableNotification(error.response.data.detail, "error");
      });
  };

  const onChangeInput = (event) => {
    const { value } = event.target;
    setAmount(value);
  };

  return (
    <StyledExchangerWrapper>
      <div className="exchanger__currencies">
        <Select
          value={selectedValue}
          onChange={setSelectedValue}
          options={currencies}
        />
        <button
          onClick={testSend}
        >
          test
        </button>
        <Select
          value={selectedOption}
          onChange={setSelectedOption}
          options={currencies}
        />
        <InputGroup
          id="name"
          type="text"
          name="name"
          autoComplete="off"
          onChange={onChangeInput}
          required
          placeholder={"0.0"}
        />
        <div className=""></div>
        <p>{result ? (result * amount): "0.0"}</p>
      </div>
    </StyledExchangerWrapper>
  )
}

export default Exchanger;