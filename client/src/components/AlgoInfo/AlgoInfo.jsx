import React from "react";
import styles from "./AlgoInfo.module.css";

function AlgoInfo() {
  return (
    <div id={styles.container}>
      <h6>Algorithm Title</h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi
        dolorum, optio esse excepturi dicta aspernatur dolor molestiae sequi
        ducimus eaque error, corrupti quos! Ullam molestias accusamus
        praesentium nihil assumenda.
      </p>
      <div>
        <span>Best: </span>
        <p>Value</p>
      </div>
      <div>
        <span>Average: </span>
        <p>Value</p>
      </div>
      <div>
        <span>Worst: </span>
        <p>Value</p>
      </div>
      <div>
        <span>Memory: </span>
        <p>Value</p>
      </div>
      <div>
        <span>Stability: </span>
        <p>Value</p>
      </div>
      <div>
        <span>Method: </span>
        <p>Value</p>
      </div>
    </div>
  );
}

export default AlgoInfo;
