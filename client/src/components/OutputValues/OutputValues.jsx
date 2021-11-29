import React from "react";
import styles from "./OutputValues.module.css";

function OutputValues() {
  return (
    <div id={styles.container} >
      <textarea className={styles.outArea}></textarea>
    </div>
  );
}

export default OutputValues;
