import { useEffect, useState } from 'react';
import { useOutletContext } from '@remix-run/react';
import styles from '~/styles/shopping-cart.css';

export function meta() {
  return[
    {
      title: "GuitarLA - Carrito de Compras",
      description: "GuitarLA, Blog de musica, venta de guitarras."
    }
  ]
}

export function links() {
  return[
    {
      rel: "stylesheet",
      href: styles
    }
  ]
}

function ShoppingCart() {
  // useOutletContext.
  const { cart, updateAmount, destroyGuitar } = useOutletContext();

  // useState.
  const [total, setTotal] = useState(0);

  // useEffect.
  useEffect(() => {
    const calcTotal = cart.reduce((total, prod) => total + (prod.amount * prod.price), 0);

    setTotal(calcTotal);
  }, [cart]);

  return (
    <ClientOnly fallback={ 'cargando...' }>
      { () => (
        <main className="contenedor">
          <h1 className="heading">Carrito de Compras</h1>

          <div className="contenido">
            <div className='carrito'>
              <h2>Articulos</h2>

              { cart?.length === 0 
                ? 'Carrito Vacio'
                : cart?.map(prod => (
                  <div className='producto' key={ prod.id }>
                    <div>
                      <img 
                        src={ prod.img } 
                        alt={ `Imagen del producto ${prod.name}` } 
                      />
                    </div>

                    <div>
                      <p className='nombre'>{ prod.name }</p>
                      <p className='cantidad'>Cantidad: </p>

                      <select
                        className='select'
                        value={ prod.amount }
                        onChange={ e => updateAmount({
                          amount: +e.target.value,
                          id: prod.id
                        }) }
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>

                      <p className='precio'><span>$ { prod.price }</span></p>
                      <p className='subtotal'>Subtotal: <span>$ { prod.price * prod.amount }</span></p>
                    </div>

                    <button
                      className='btn-eliminar'
                      type='button'
                      onClick={ () => destroyGuitar(prod.id) }
                    >X</button>
                  </div>
                ))
              }
            </div>

            <aside className="resumen">
              <h3>Resumen del Pedido</h3>

              <p>Total a pagar: <span>$ { total }</span></p>
            </aside>
          </div>
        </main>
      ) }
    </ClientOnly>
  )
}

export default ShoppingCart