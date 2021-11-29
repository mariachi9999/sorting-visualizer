import React from "react";
import styles from "./Header.module.css";
import CalculateIcon from "@mui/icons-material/Calculate";

function Header() {
  return (
    <div id={styles.container}>
      <span>
        <CalculateIcon />
      </span>
      <h1>Algorithm Visualizer</h1>
      <h2>About Us</h2>
    </div>
  );
}

export default Header;
