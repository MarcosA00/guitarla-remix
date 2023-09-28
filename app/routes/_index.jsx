import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import { getPosts } from "~/models/posts.server";
import { getCourse } from "~/models/course.server";
import GuitarList from "~/components/GuitarList";
import PostList from "~/components/PostList";
import Course from "~/components/Course";
import stylesGuitars from '~/styles/guitars.css'
import stylesBlog from '~/styles/blog.css'
import stylesCourse from '~/styles/course.css'

export function meta() {
  return[
    {
      title: 'GuitarLA - Pagina Principal'
    }
  ]
}

export function links() {
  return[
    {
      rel: "stylesheet",
      href: stylesGuitars
    },
    {
      rel: "stylesheet",
      href: stylesBlog
    },
    {
      rel: "stylesheet",
      href: stylesCourse
    }
  ]
}

export async function loader() {
  const [guitars, posts, course] = await Promise.all([
    getGuitars(),
    getPosts(),
    getCourse()
  ]);

  return {
    guitars: guitars.data,
    posts: posts.data,
    course: course.data
  };
}

function Index() {
  const { guitars, posts, course } = useLoaderData();

  return (
    <div>
      <main className="contenedor">
        <GuitarList 
          guitars = { guitars }
        />
      </main>

      <Course 
        course = { course.attributes }
      />

      <section className="contenedor">
        <PostList 
          posts = { posts }
        />
      </section>
    </div>
  )
}

export default Index;