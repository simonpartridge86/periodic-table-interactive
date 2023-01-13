import { Element, GetPeriodicTable } from "../../types";

async function fetchData() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": process.env.API_HOST,
    },
  };

  const res = await fetch("https://periodictable.p.rapidapi.com/", options);
  const results: GetPeriodicTable = await res.json();
  return results;
}

export async function getStaticPaths() {
  const results = await fetchData();
  return {
    paths: results.map((element: Element) => {
      return { params: { id: String(element.name) } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const results = await fetchData();
  const currentElement = results.find(
    (element) => element.name.toLowerCase() === params.id.toLowerCase()
  );
  return {
    props: { element: currentElement },
  };
}

export default function ElementPage({ element }: { element: Element }) {
  console.log(element);
  return (
    <div>
      <h1>{element.name}</h1>
    </div>
  );
}
