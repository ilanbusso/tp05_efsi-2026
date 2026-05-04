function listaCard({ peliculas, onSeleccionar }) {
  return (
    <div>
      {peliculas.map((peli) => (
        <MovieCard
          key={peli.imdbID}
          pelicula={peli}
          onSeleccionar={onSeleccionar}
        />
      ))}
    </div>
  )
}
export default listaCard