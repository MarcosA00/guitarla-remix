import { useState, useEffect } from "react";
import { 
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
  Link
} from "@remix-run/react";
import styles from '~/styles/index.css';
import Header from "~/components/Header";
import Footer from "./components/Footer";

export function meta() {
  return(
    [
      { 
        charset: "utf-8" 
      },
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1" 
      },
      { 
        title: 'GuitarLA - Remix' 
      }
    ]
  )
}

export function links() {
  return[
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap"
    },
    {
      rel: "stylesheet",
      href: styles
    }
  ]
}

export default function App() {
  // useState.
  const [cart, setCart] = useState(typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart')) ?? [] : null);

  // useEffect.
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

  // Funcion para añadir articulos al carrito o modificar cantidades con validación.
  const addCart = guitar => {
    if(cart.some(guitarState => guitarState.id === guitar.id)) {
      // Iterar sobre el arreglo e identificar el elemento duplicado.
      const updateCart = cart.map(guitarState => {
        if(guitarState.id === guitar.id) {
          guitarState.amount = guitar.amount;
        }

        return guitarState;
      })

      // Añadir y reescribir en el carrito.
      setCart(updateCart);
    }else {
      // Nuevo egistro, agregar al carrito.
      setCart([...cart, guitar]);
    }
  }

  // Funcion para actualizar cantidad de articulos dinamicamente.
  const updateAmount = guitar => {
    const updateCart = cart.map(guitarState => {
      if(guitarState.id === guitar.id) {
        guitarState.amount = guitar.amount;
      }

      return guitarState;
    })

    setCart(updateCart);
  }

  // Funcion para eliminar del carrito.
  const destroyGuitar = id => {
    const updateCart = cart.filter(guitarState => guitarState.id !== id);

    setCart(updateCart);
  }

  return(
    <Document>
      <Outlet 
        context = { {
          addCart,
          cart,
          updateAmount,
          destroyGuitar
        } }
      />
    </Document>
  )
}

function Document({ children }) {
  return(
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />

        { children }

        <Footer />

        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

// Manejo de errores.
export function CatchBoundary() {
  const error = useCatch()
  return (
      <Document>
          <p className='error'>{error.status } {error.statusText}</p>
          <Link className='error-enlace' to="/">Tal vez quieras volvera a la página principal</Link>
      </Document>
  )
}

export function ErrorBoundary({error}) {
  return (
      <Document>
          <p className='error'>{error.status } {error.statusText}</p>
          <Link className='error-enlace' to="/">Tal vez quieras volvera a la página principal</Link>
      </Document>
  )
}