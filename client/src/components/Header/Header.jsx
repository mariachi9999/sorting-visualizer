import React from "react";
import styles from "./Header.module.css";
import CalculateIcon from "@mui/icons-material/Calculate";
import { Link } from "react-router-dom";

function Header() {
  const style={fontSize: '58px', color: "#e9c46a"}
  return (
    <div id={styles.container} className="header">

      <Link to={`/`} id={styles.namelogo}>
        <div id={styles.namelogo}>
          <span>
            <CalculateIcon className="material-icons" style={style} />
          </span>
          <h1 className={styles.name}>Algorithm Visualizer</h1>
        </div>
      </Link>
      <Link to={`/about`} id={styles.about}>
        <h2 className={styles.about}>About Us</h2>
      </Link>
    </div>
  );
}

export default Header;
