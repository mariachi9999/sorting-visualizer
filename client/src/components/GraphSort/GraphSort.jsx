import React from "react";
import styles from "./GraphSort.module.css";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Chartjs from "chart.js/auto";
import { useState, useEffect, useRef } from "react";

const randomInt = () => Math.floor(Math.random() * (10 - 1 + 1)) + 1;

const chartConfig = {
  type: "bar",
  data: {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "Sorting Algorithm",
        data: [1, 2, 3, 4, 5, 6],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
};

const GraphSort = ({ outputValues }) => {
  console.log(outputValues);
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const [pointer, setPointer] = useState(0);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  const updateDataset = (datasetIndex, newData, step) => {
    chartInstance.data.labels = newData;
    chartInstance.data.datasets[datasetIndex].data = newData;
    chartInstance.data.datasets[datasetIndex].label = `Step: ${step}`;
    chartInstance.update();
  };

  const onButtonClick = () => {
    let data = [];
    if (outputValues !== undefined && outputValues.length > 0) {
      data = outputValues[pointer];
      updateDataset(0, data, pointer + 1);
      setPointer((prevPointer) => {
        if (prevPointer < outputValues.length - 1) {
          return prevPointer + 1;
        } else {
          return 0;
        }
      });
    } else {
      console.log("enter to random");
      data = [
        randomInt(),
        randomInt(),
        randomInt(),
        randomInt(),
        randomInt(),
        randomInt(),
      ];
      updateDataset(0, data, 1);
    }
  };

  return (
    <div>
      <button onClick={onButtonClick} className={styles.btn}>
        Next Step!
      </button>
      <canvas ref={chartContainer} className={styles.graphContainer}/>
    </div>
  );
};

export default GraphSort;
