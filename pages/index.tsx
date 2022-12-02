import { GetStaticProps } from "next";
import ElementCard from "../components/ElementCard";
import { Element, GetPeriodicTable } from "../types";

interface PageProps {
  elements: Element[];
}

export default function Home({ elements }: PageProps) {
  console.log(elements);
  return (
    <>
      <h1>Periodic Table of Elements</h1>
      <div>
        {elements.map((element) => {
          return <ElementCard key={element.atomicNumber} element={element} />;
        })}
      </div>
    </>
  );
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
