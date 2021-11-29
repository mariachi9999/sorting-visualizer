import React from "react";
import styles from "./ButtonSort.module.css";

function ButtonSort({ sortClick }) {
  return (
    <div id={styles.container}>
      <button onClick={sortClick} className={styles.btn}>
        SORT
      </button>
    </div>
  );
}

export default ButtonSort;
