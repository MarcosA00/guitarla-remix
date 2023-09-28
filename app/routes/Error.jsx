import styles from '~/styles/index.css'

export function links() {
  return(
    [
      {
        rel: "stylesheet",
        href: styles
      }
    ]
  )
}

function Error() {
  return (
    <div>
      <h2 className="error">404  - Elemento no encontrado</h2>
    </div>
  )
}

export default Error;