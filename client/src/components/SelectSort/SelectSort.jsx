import React from "react";
import styles from "./SelectSort.module.css";

function SelectSort() {
  return (
    <div id={styles.container} className={styles.container}>
      <form id={styles.form}>
        <label>
          Bubble Sort
          <input
            name="Bubble"
            type="checkbox"
            // checked={}
            // onChange={}
          />
        </label>
        <label>
          Heap Sort
          <input
            name="Heap"
            type="checkbox"
            // checked={}
            // onChange={}
          />
        </label>
        <label>
          Insertion Sort
          <input
            name="Insertion"
            type="checkbox"
            // checked={}
            // onChange={}
          />
        </label>
        <label>
          Merge Sort
          <input
            name="Merge"
            type="checkbox"
            // checked={}
            // onChange={}
          />
        </label>
        <label>
          Quick Sort
          <input
            name="Quick"
            type="checkbox"
            // checked={}
            // onChange={}
          />
        </label>
        <label>
          Selection Sort
          <input
            name="Selection"
            type="checkbox"
            // checked={}
            // onChange={}
          />
        </label>
      </form>
    </div>
  );
}

export default SelectSort;
