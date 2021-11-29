import React from "react";
import styles from "./SelectSort.module.css";
import { useState, useEffect } from "react";
import { Checkbox, FormGroup, FormControlLabel } from "@material-ui/core";

function SelectSort({ setState, selectedSort }) {
  const [box, setBox] = useState({
    Bubble: false,
    Heap: false,
    Insertion: false,
    Merge: false,
    Quick: false,
    Selection: false,
  });

  console.log(selectedSort);

  const handleClick = (e) => {
    setState((prevState) => {
      return {
        ...prevState,
        selectedSort: e.target.name,
      };
    });
  };

  const limpiar = () => {
    console.log("limpiar");
    if (selectedSort === "") {
      setBox({
        Bubble: false,
        Heap: false,
        Insertion: false,
        Merge: false,
        Quick: false,
        Selection: false,
      });
    }
    if (selectedSort === "Bubble") {
      setBox({
        Bubble: true,
        Heap: false,
        Insertion: false,
        Merge: false,
        Quick: false,
        Selection: false,
      });
    }
    if (selectedSort === "Heap") {
      setBox({
        Bubble: false,
        Heap: true,
        Insertion: false,
        Merge: false,
        Quick: false,
        Selection: false,
      });
    }
    if (selectedSort === "Insertion") {
      setBox({
        Bubble: false,
        Heap: false,
        Insertion: true,
        Merge: false,
        Quick: false,
        Selection: false,
      });
    }
    if (selectedSort === "Merge") {
      setBox({
        Bubble: false,
        Heap: false,
        Insertion: false,
        Merge: true,
        Quick: false,
        Selection: false,
      });
    }
    if (selectedSort === "Quick") {
      setBox({
        Bubble: false,
        Heap: false,
        Insertion: false,
        Merge: false,
        Quick: true,
        Selection: false,
      });
    }
    if (selectedSort === "Selection") {
      setBox({
        Bubble: false,
        Heap: false,
        Insertion: false,
        Merge: false,
        Quick: false,
        Selection: true,
      });
    }
  };

  useEffect(() => limpiar(), [selectedSort]);

  return (
    <div id={styles.container} className={styles.container}>
      <FormGroup id={styles.form}>
        <FormControlLabel
          control={
            <Checkbox
              id="Bubble"
              name="Bubble"
              type="checkbox"
              checked={box.Bubble}
              onClick={handleClick}
            />
          }
          label="Bubble Sort"
        ></FormControlLabel>
        <FormControlLabel
          control={
            <Checkbox
              id="Heap"
              name="Heap"
              type="checkbox"
              checked={box.Heap}
              onClick={handleClick}
            />
          }
          label="Heap Sort"
        ></FormControlLabel>
        <FormControlLabel
          control={
            <Checkbox
              id="Insertion"
              name="Insertion"
              type="checkbox"
              checked={box.Insertion}
              onClick={handleClick}
            />
          }
          label="Insertion Sort"
        ></FormControlLabel>
        <FormControlLabel
          control={
            <Checkbox
              id="Merge"
              name="Merge"
              type="checkbox"
              checked={box.Merge}
              onClick={handleClick}
            />
          }
          label="Merge Sort"
        ></FormControlLabel>
        <FormControlLabel
          control={
            <Checkbox
              id="Quick"
              name="Quick"
              type="checkbox"
              checked={box.Quick}
              onClick={handleClick}
            />
          }
          label="Quick Sort"
        ></FormControlLabel>

        <FormControlLabel
          control={
            <Checkbox
              id="Selection"
              name="Selection"
              type="checkbox"
              checked={box.Selection}
              onClick={handleClick}
            />
          }
          label="Selection Sort"
        />
      </FormGroup>
    </div>
  );
}

export default SelectSort;
