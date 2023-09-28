import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import GuitarList from "~/components/GuitarList";

export function meta() {
  return(
    [
      {
        title: "GuitarLA - Tienda de Guitarras",
        description: "GuitarLA - Nuestra colección de guitarras"
      }
    ]
  )
}

export async function loader() {
  const guitars = await getGuitars();

  return guitars.data;
}

function Shop() {
  const guitars = useLoaderData();

  return (
    <GuitarList 
      guitars = { guitars }
    />
  )
}

export default Shop;