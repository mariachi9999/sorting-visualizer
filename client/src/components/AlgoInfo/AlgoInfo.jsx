import React from "react";
import styles from "./AlgoInfo.module.css";

function algoInfo({ outputValues }) {
  let { algoInfo, sortedArr } = outputValues;
  console.log(outputValues);
  return (
    <div id={styles.container} className={styles.text}>
      {algoInfo ? (
        <div>
          <h3 className={styles.title}>{algoInfo.title}</h3>
          <p>{algoInfo.description}</p>
          <div className="container">
            <div className="container-box1">
              <div>
                <span>Best: </span>
                <p>{algoInfo.best}</p>
              </div>
              <div>
                <span>Average: </span>
                <p>{algoInfo.average}</p>
              </div>
              <div>
                <span>Worst: </span>
                <p>{algoInfo.worst}</p>
              </div>
            </div>
            <div className="container-box1">
              <div>
                <span>Memory: </span>
                <p>{algoInfo.memory}</p>
              </div>
              <div>
                <span>Stability: </span>
                <p>{algoInfo.stable}</p>
              </div>
              <div>
                <span>Method: </span>
                <p>{algoInfo.method}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div id={styles.empty}></div>
      )}
    </div>
  );
}

export default algoInfo;
