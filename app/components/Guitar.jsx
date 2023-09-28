import { Link } from "@remix-run/react";

function Guitar({ guitar }) {
  const { name, description, img, price, url } = guitar;

  return (
    <div className="guitarra">
      <img 
        src={ img.data.attributes.formats.medium.url } 
        alt={ `imagen guitarra ${name}` } 
      />

      <div className="contenido">
        <h3>{ name }</h3>
        <p className="descripcion">{ description }</p>
        <p className="precio">${ price }</p>

        <Link className="enlace" to={ `/guitars/${url}` }>Ver Producto</Link>
      </div>
    </div>
  )
}

export default Guitar;