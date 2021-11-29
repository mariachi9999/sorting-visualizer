import React from "react";
import styles from "./Footer.module.css";
import CalculateIcon from "@mui/icons-material/Calculate";

function Footer() {
  return (
    <div id={styles.container} className={styles.footer}>
      <span className={styles.text}>Made with 💛 for Jalasoft</span>
    </div>
  );
}

export default Footer;
