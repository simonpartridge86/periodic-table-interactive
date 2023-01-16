import styles from "../styles/ElementCard.module.css";
import { Element } from "../types";
import Link from "next/link";

export default function ElementCard({
  element,
  block,
  group,
}: {
  element: Element;
  block: string;
  group: string;
}) {
  const formattedBlock = block.split(" ").join("-");
  const formattedGroup = `group-${group}`;

  return (
    <Link href={`/elements/${element.name}`}>
      <div
        className={`${styles["element-card"]} ${styles[formattedGroup]} ${styles[formattedBlock]}`}
      >
        <p>{element.atomicNumber}</p>
        <h2>{element.symbol}</h2>
        {/* <p>{element.name}</p>
      <p>{element.atomicMass}</p> */}
      </div>
    </Link>
  );
}
