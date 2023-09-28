import { useState } from "react";
import { useLoaderData, useOutletContext } from "@remix-run/react";
import { getGuitar } from "~/models/guitars.server";

export async function loader({ params }) {
  const { guitarUrl } = params;
  const guitar = await getGuitar(guitarUrl);

  if(guitar.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra No Encontrada'
    })
  } 

  return guitar;
}

export function meta({ data }) {
  if(!data) {
    return {
      title: 'GuitarLA - Guitarra No encontrada',
      description: `Guitarras, venta de guitarras, guitarra no encontrada`
    }
  }
  return(
    [
      {
        title: `GuitarLA - Guitarra ${data.data[0].attributes.name}`,
        description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.name}`
      }
    ]
  )
}

function Guitar() {
  // useOutletContext.
  const { addCart } = useOutletContext();

  // useState.
  const [amount, setAmount] = useState(0);

  // useLoaderData
  const guitar = useLoaderData();
  const { name, description, img, price } = guitar.data[0].attributes;

  const handleSubmit = e => {
    e.preventDefault();

    if(amount < 1) {
      alert('Selecciona la cantidad');

      return;
    }

    const selectGuitar = {
      id: guitar.data[0].id,
      img: img.data.attributes.url,
      name,
      price,
      amount
    };

    addCart(selectGuitar);
  }

  return (
    <div className="guitarra">
      <img 
        className="imagen"
        src={ img.data.attributes.url } 
        alt={ `Imagen de la guitarra ${name}` } 
      />

      <div className="contenido">
        <h3>{ name }</h3>

        <p className="texto">{ description }</p>
        <p className="precio">${ price }</p>

        <form 
          className="formulario"
          onSubmit={ handleSubmit }
        >
          <label htmlFor="cantidad">Cantidad</label>

          <select 
            onChange={ e => setAmount(+e.target.value) }
            id="cantidad"
          >
            <option value="0">Seleccionar</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input 
            type="submit"
            value="Agrregar al Carrito"
          />
        </form>
      </div>
    </div>
  )
}

export default Guitar;