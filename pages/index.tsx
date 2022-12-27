import styles from "../styles/index.module.css";
import { GetStaticProps } from "next";
import ElementCard from "../components/ElementCard";
import { Element, GetPeriodicTable } from "../types";

interface PageProps {
  elements: Element[];
}

export const getStaticProps: GetStaticProps = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": process.env.API_HOST,
    },
  };
  const res = await fetch("https://periodictable.p.rapidapi.com/", options);
  const results: GetPeriodicTable = await res.json();

  return {
    props: {
      elements: results,
    },
  };
};

export default function Home({ elements }: PageProps) {
  let periods: { id: number; content: Element[] }[] = [];

  elements.forEach((element) => {
    const currentPeriod: number = Number(element.period);
    if (!periods.some((e) => e.id === currentPeriod)) {
      periods[currentPeriod] = { id: currentPeriod, content: [element] };
    } else {
      periods[currentPeriod].content.push(element);
    }
  });

  return (
    <main className={styles.home}>
      <h1>Periodic Table of Elements</h1>
      <div className={styles.table}>
        {periods.map((period) => {
          return (
            <div className={styles.period} key={period.id}>
              {period.content.map((element) => {
                return (
                  <ElementCard
                    key={element.atomicNumber}
                    element={element}
                    className={element.groupBlock}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </main>
  );
}
