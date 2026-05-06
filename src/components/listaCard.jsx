import MovieCard from "./movieCard"

function listaCard({ peliculas, onSeleccionar }) {
  return (
    <div  className="movie-grid">
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
