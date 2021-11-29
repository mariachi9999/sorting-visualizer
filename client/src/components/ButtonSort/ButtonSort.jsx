import React from "react";
import styles from "./ButtonSort.module.css";

function ButtonSort({ sortClick }) {
  return (
    <div id={styles.container} className={styles.btn}>
      <button onClick={sortClick}>SORT</button>
    </div>
  );
}

export default ButtonSort;
