import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import { formatDate } from "~/utils/helpers";

export function meta({ data }) {
  return(
    [
      {
        title: `GuitarLA - ${data?.data[0].attributes.title}`,
        description: `GuitarLA, Blog ${data?.data[0].attributes.title}`
      }
    ]
  )
}

export async function loader({ params }) {
  const { postUrl } = params;
  const post = await getPost(postUrl);

  return post;
}

function Post() {
  const post = useLoaderData();
  const { title, content, img, publishedAt } = post?.data[0].attributes;

  return (
    <article className="post mt-3">
      <img 
        className="imagen"
        src={ img?.data?.attributes?.url }
        alt={ `Imagen blog ${title}` }
      />

      <div className="contenido">
        <h3>{ title }</h3>

        <p className="fecha">{ formatDate(publishedAt) }</p>

        <p className="texto">{ content }</p>
      </div>
    </article>
  )
}

export default Post;