
export function PokemonCard({ id, name, sprites = [] }) {
  return (
    <section style={{ height: 200 }}>
      <h2 className="text-capitalize">#{id} - {name}</h2>

      {/* IMÁGENES */}
      <div>
        {
          sprites.map(sprite => (
            <img key={sprite} src={sprite} alt={name} />
          ))
        }
      </div>
    </section>
  )
}
