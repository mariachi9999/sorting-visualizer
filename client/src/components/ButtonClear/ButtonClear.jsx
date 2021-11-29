import React from "react";
import styles from "./ButtonClear.module.css";

function ButtonClear() {
  return (
    <div id={styles.container} className={styles.btn}>
      <button>CLEAR</button>
    </div>
  );
}

export default ButtonClear;
