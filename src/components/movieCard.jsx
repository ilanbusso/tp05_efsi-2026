function MovieCard({ pelicula, onSeleccionar }) {
  return (
    <div className="movie-card">
      <img className="movie-poster" src={pelicula.Poster} alt={pelicula.Title} />
      <h3 className="movie-title">{pelicula.Title}</h3>
      <p className="movie-meta">Año: {pelicula.Year}</p>
      <p className="movie-meta">Tipo: {pelicula.Type}</p>

      <button className="detail-button" onClick={() => onSeleccionar(pelicula.imdbID)}>
        Ver detalle
      </button>
    </div>
  )
}

export default MovieCard