import React from "react";
import styles from "./GraphSort.module.css";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useState, useEffect } from "react";

// const state = {
//   labels: ["January", "February", "March", "April", "May"],
//   datasets: [
//     {
//       label: "Rainfall",
//       backgroundColor: "rgba(75,192,192,1)",
//       borderColor: "rgba(0,0,0,1)",
//       borderWidth: 2,
//       data: [65, 59, 80, 81, 56],
//     },
//   ],
// };

function GraphSort({ outputValues }) {
  let title = outputValues?.algoInfo?.title || "Sort";
  let operations = outputValues?.sortedArr || [];
  console.log(operations);

  useEffect(() => {
    operations.forEach((operation) => {
      let labels = [];
      for (let i = 0; i < operation.length; i++) {
        labels.push(i + 1);
      }
      setState({
        labels: labels,
        datasets: [
          {
            label: title,
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: operation,
          },
        ],
      });
    });
  }, [operations]);

  const [state, setState] = useState({
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
    ],
  });

  return (
    <div className={styles.graphContainer}>
      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}

export default GraphSort;
