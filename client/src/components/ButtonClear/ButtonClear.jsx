import React from "react";
import styles from "./ButtonClear.module.css";

function ButtonClear({ clearClick }) {
  return (
    <div id={styles.container}>
      <button onClick={clearClick}>CLEAR</button>
    </div>
  );
}

export default ButtonClear;
