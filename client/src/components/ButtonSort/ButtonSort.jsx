import React from "react";
import styles from "./ButtonSort.module.css";

function ButtonSort() {
  return (
    <div id={styles.container} className={styles.btn}>
      <button>SORT</button>
    </div>
  );
}

export default ButtonSort;
