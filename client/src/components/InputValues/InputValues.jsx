import React from "react";
import styles from "./InputValues.module.css";

function InputValues({ setState, inputValues }) {
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setState((prevState) => {
      return {
        ...prevState,
        inputValues: e.target.value,
      };
    });
  };
  return (
    <div id={styles.container}>
      <textarea
        value={inputValues}
        onChange={handleChange}
        placeholder={`Enter comma separated numbers`}
      ></textarea>
    </div>
  );
}

export default InputValues;
