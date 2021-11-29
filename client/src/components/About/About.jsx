import styles from "./About.module.css";
import jorge from "../../assets/jorge.jpg";
import nico from "../../assets/nico.jpg";

function About() {
  return (
    <div id={styles.container}>
      <div id={styles.leftSide}>
        <img src={jorge} alt="jorge" className={styles.img}></img>
        <h2 className={styles.names}>JORGE CHAIN LOPEZ</h2>
      </div>
      <div id={styles.rightSide}>
        <img src={nico} alt="nico" className={styles.img}></img>
        <h2 className={styles.names}>NICOLAS LUPO</h2>
      </div>
    </div>
  );
}

export default About;
