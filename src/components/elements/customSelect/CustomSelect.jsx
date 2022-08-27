import React from "react";

import { StyledSelect } from "./styledCustomSelect";

const CustomSelect = ({ options, onChange, value, name, disabled, placeholder }) => {
  return (
    <StyledSelect
      classNamePrefix="custom-select"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      options={options}
      disabled={disabled}
    />
  );
};

export default CustomSelect;
