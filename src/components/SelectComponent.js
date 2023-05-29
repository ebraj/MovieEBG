import React from "react";
import Select from "react-select";

const selectStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    color: "#ffffff",
    backgroundColor: "#1f2937",
    minWidth: "180px",
    border: 0,
    boxShadow: "none",
    "&:hover": {},
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    color: "#ffffff",
    backgroundColor: 0,
    "&:hover": {
      backgroundColor: "#22c55e",
      color: "#151515",
    },
  }),
  menu: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: "#1f2937",
  }),
  singleValue: (baseStyles, state) => ({
    ...baseStyles,
    color: "#ffffff",
  }),
};

const SelectComponent = ({
  selectOptions,
  placeholder = "Select Category",
  handleSelectChange,
}) => {
  return (
    <>
      <Select
        className="flex-1"
        placeholder={placeholder}
        options={selectOptions}
        defaultValue={selectOptions[0]}
        onChange={(singleValue) => {
          handleSelectChange(singleValue.value);
        }}
        styles={selectStyles}
      />
    </>
  );
};

export default SelectComponent;
