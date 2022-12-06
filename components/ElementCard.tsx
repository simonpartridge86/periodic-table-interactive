import styles from "../styles/ElementCard.module.css";
import { Element } from "../types";

export default function ElementCard({ element }: { element: Element }) {
  return (
    <div className={styles["element-card"]}>
      <p>{element.atomicNumber}</p>
      <h2>{element.symbol}</h2>
      {/* <p>{element.name}</p>
      <p>{element.atomicMass}</p> */}
    </div>
  );
}
