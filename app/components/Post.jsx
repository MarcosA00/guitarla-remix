import { Link } from "@remix-run/react";
import { formatDate } from "~/utils/helpers";

function Post({ post }) {
  const { content, img, title, url, publishedAt } = post;

  return (
    <article className="post">
      <img 
        className="imagen"
        src={ img.data.attributes.formats.small.url }
        alt={ `Imagen blog ${title}` }
      />

      <div className="contenido">
        <h3>{ title }</h3>

        <p className="fecha">{ formatDate(publishedAt) }</p>

        <p className="resumen">{ content }</p>

        <Link className="enlace" to={ `/blog/${url}` }>Leer más</Link>
      </div>
    </article>
  )
}

export default Post