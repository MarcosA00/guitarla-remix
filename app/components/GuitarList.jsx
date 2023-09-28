import Guitar from "./Guitar"

function GuitarList({ guitars }) {
  return (
    <>
      <h2 className="heading">Nuestra colección</h2>

      { guitars?.length && (
        <div className="guitarras-grid">
          { guitars.map(guitar => (
            <Guitar
              key = { guitar?.attributes.url }
              guitar = { guitar?.attributes }
            />
          ) ) }
        </div>
      ) }
    </>
  )
}

export default GuitarList