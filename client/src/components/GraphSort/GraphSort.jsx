import React from "react";
import styles from "./GraphSort.module.css";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useState, useEffect } from "react";

function GraphSort({ outputValues }) {
  const [title, setTitle] = useState(outputValues?.algoInfo?.title || "Sort");
  const [operations, setOperations] = useState(outputValues?.sortedArr || []);
  const [iteration, setIteration] = useState(0);

  const [state, setState] = useState({
    labels: ["0", "1", "2", "3", "4"],
    datasets: [
      {
        label: "Sorting",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [0, 0, 0, 0, 0],
      },
    ],
  });

  useEffect(() => {
    let newlabels = [];
    if (operations[0]?.length) {
      for (let i = 0; i < operations[0].length; i++) {
        newlabels.push(i + 1);
      }
      setState((prevState) => {
        return {
          ...prevState,
          labels: newlabels,
        };
      });
    }
  }, [operations]);

  useEffect(() => {
    const interval = setInterval(() => {
      iteration < operations?.length &&
        setIteration((prevState) => prevState + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [state.labels]);

  useEffect(() => {
    setState((prevState) => {
      return {
        ...prevState,
        datasets: [
          {
            label: "Sorting",
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: operations[iteration],
          },
        ],
      };
    });
  }, [iteration]);

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
