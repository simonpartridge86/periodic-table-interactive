import { Element } from "../types";

export default function ElementCard({ element }: { element: Element }) {
  return (
    <div>
      <p>{element.atomicNumber}</p>
      <h2>{element.symbol}</h2>
      <p>{element.name}</p>
      <p>{element.atomicMass}</p>
    </div>
  );
}
