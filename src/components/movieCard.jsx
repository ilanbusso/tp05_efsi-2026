function MovieCard({ pelicula, onSeleccionar }) {
  return (
    <div>
      <img src={pelicula.Poster} alt={pelicula.Title} />
      <h3>{pelicula.Title}</h3>
      <p>Año: {pelicula.Year}</p>
      <p>Tipo: {pelicula.Type}</p>

      <button onClick={() => onSeleccionar(pelicula.imdbID)}>
        Ver detalle
      </button>
    </div>
  )
}

export default MovieCard