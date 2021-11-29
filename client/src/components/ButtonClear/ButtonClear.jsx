import React from "react";
import styles from "./ButtonClear.module.css";

function ButtonClear({ clearClick }) {
  return (
    <div id={styles.container} className={styles.btn}>
      <button onClick={clearClick}>CLEAR</button>
    </div>
  );
}

export default ButtonClear;
