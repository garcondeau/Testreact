import React from "react";

const CurrenciesSwap = ({setExchangeDetails, sellingCurrency, buyingCurrency, setResult}) => {

  const swapCurrencies = () => {
    setResult(null)
    setExchangeDetails({ sellingCurrency: buyingCurrency, buyingCurrency: sellingCurrency });
  };

  return (
    <div
      className="swap-btn"
    >
      <button
        onClick={swapCurrencies}
        className="icon-swap"/>
    </div>
  )
}

export default CurrenciesSwap;