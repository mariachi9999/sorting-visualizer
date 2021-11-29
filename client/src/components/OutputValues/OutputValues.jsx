import React from "react";
import styles from "./OutputValues.module.css";
import { useState, useEffect } from "react";

function OutputValues({ outputValues }) {
  const [state, setState] = useState("");

  useEffect(() => {
    outputValues?.sortedArr?.at(-1)
      ? setState(outputValues.sortedArr.at(-1))
      : setState("");
  }, [outputValues]);

  return (
    <div id={styles.container}>
      <textarea className={styles.outArea} value={state}></textarea>
    </div>
  );
}

export default OutputValues;
