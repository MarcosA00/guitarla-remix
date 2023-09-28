import { Link, useLocation } from "@remix-run/react";
import Img from '../../public/img/carrito.png'

function Nav() {
  const location = useLocation();

  return (
    <nav className="navegacion">
      <Link
        to="/"
        className={ location.pathname === '/' ? 'active' : '' }
      >Inicio</Link>

      <Link
        to="/us"
        className={ location.pathname === '/us' ? 'active' : '' }
      >Nosotros</Link>

      <Link
        to="/guitars"
        className={ location.pathname === '/guitars' ? 'active' : '' }
      >Tienda</Link>

      <Link
        to="/blog"
        className={ location.pathname === '/blog' ? 'active' : '' }
      >Blog</Link>

      <Link
        to="/shopping-cart"
      >
        <img 
          src={ Img }
          alt="Carrito de compras" 
        />
      </Link>
    </nav>
  )
}

export default Nav;