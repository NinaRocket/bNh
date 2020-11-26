import React from "react";
import Select from "react-select";

function ColorPlay() {
  const options = [
    { value: "Red", label: "Red", color: "#FF0000" },
    { value: "Blue", label: "Blue", color: "#0000FF" },
    { value: "Green", label: "Green", color: "#008000" },
    { value: "Pink", label: "Pink", color: "#FFC0CB" },
  ];

  const styles = {
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "normal",
      color: "white",
      backgroundColor: state.data.color,
      fontSize: state.selectProps.myFontSize,
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.data.color,
      fontSize: state.selectProps.myFontSize,
    }),
  };

  return <Select myFontSize="20px" styles={styles} options={options} />;
}

export default ColorPlay;
