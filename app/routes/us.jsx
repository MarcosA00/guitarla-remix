import styles from '../styles/us.css';
import Img from '../../public/img/nosotros.jpg';

export function meta() {
  return(
    [
      {
        title: 'GuitarLA - Sobre Nosotros'
      },
      {
        description: 'Venta de guitarras, blog de musica y más'
      }
    ]
  )
}

export function links() {
  return[
    {
      rel: "stylesheet",
      href: styles
    },
    {
      rel: 'preload',
      href: Img,
      as: 'image'
    }
  ]
}

function Us() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img 
          src={ Img } 
          alt="imagen sobre nosotros" 
        />

        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dolore aliquam, quas enim alias veniam esse perferendis fugit fuga ab unde ipsa adipisci nam nulla, amet, quibusdam sint voluptate ducimus! Qui, earum veniam perferendis et ut debitis laboriosam? Soluta earum est perspiciatis eos commodi ipsa dolorem asperiores sit odit.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dolore aliquam, quas enim alias veniam esse perferendis fugit fuga ab unde ipsa adipisci nam nulla, amet, quibusdam sint voluptate ducimus! Qui, earum veniam perferendis et ut debitis laboriosam? Soluta earum est perspiciatis eos commodi ipsa dolorem asperiores sit odit.</p>
        </div>
      </div>
    </main>
  )
}

export default Us;