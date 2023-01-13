import styles from "../styles/ElementCard.module.css";
import { Element } from "../types";
import Link from "next/link";

export default function ElementCard({
  element,
  className,
}: {
  element: Element;
  className: String;
}) {
  const formattedClassName = className.split(" ").join("-");

  return (
    <Link href={`/elements/${element.name}`}>
      <div
        className={`${styles[formattedClassName]} ${styles["element-card"]}`}
      >
        <p>{element.atomicNumber}</p>
        <h2>{element.symbol}</h2>
        {/* <p>{element.name}</p>
      <p>{element.atomicMass}</p> */}
      </div>
    </Link>
  );
}
