import React from "react";
import styles from "./Header.module.css";
import CalculateIcon from "@mui/icons-material/Calculate";

function Header() {
  const style={fontSize: '58px', color: "#e9c46a"}
  return (
    <div id={styles.container} className="header">
      <span>
        <CalculateIcon className="material-icons" style={style} />
      </span>
      <h1 className={styles.name}>Algorithm Visualizer</h1>
      <h2 className={styles.about}>About Us</h2>
    </div>
  );
}

export default Header;
