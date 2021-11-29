import React from "react";
import styles from "./AlgoInfo.module.css";

const placeholder = {
  title: "Sorting Algorithms",
  p1: "In computer science, a sorting algorithm is an algorithm that puts elements of a list into an order.",
  p2: "The most frequently used orders are numerical order and lexicographical order, and either ascending or descending. Efficient sorting is important for optimizing the efficiency of other algorithms (such as search and merge algorithms) that require input data to be in sorted lists. Sorting is also often useful for canonicalizing data and for producing human-readable output",
  p3: "Formally, the output of any sorting algorithm must satisfy two conditions:",
  li1: "The output is in monotonic order (each element is no smaller/larger than the previous element, according to the required order).",
  li2: "The output is a permutation (a reordering, yet retaining all of the original elements) of the input.",
};

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
        <div id={styles.empty}>
          <h3 className={styles.title}>{placeholder.title}</h3>
          <p> {placeholder.p1}</p>
          <p> {placeholder.p2}</p>
          <p> {placeholder.p3}</p>
          <ul>
            <li>{placeholder.li1}</li>
            <li>{placeholder.li2}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default algoInfo;
