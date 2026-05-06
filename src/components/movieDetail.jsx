function movieDetail({ pelicula }) {
  if (!pelicula) {
    return (
      <div>
        <p>Seleccioná una película para ver el detalle.</p>
      </div>
    )
  }

  return (
     <div className="movie-detail">
      <img className="movie-detail-poster" src={pelicula.Poster} alt={pelicula.Title} />

      <div className="movie-detail-content">
      <h2>{pelicula.Title}</h2>

      <p>Año: {pelicula.Year}</p>
      <p>Género: {pelicula.Genre}</p>
      <p>Director: {pelicula.Director}</p>
      <p>Actores: {pelicula.Actors}</p>
      <p>Sinopsis: {pelicula.Plot}</p>
      <p>Duración: {pelicula.Runtime}</p>
      <p>Idioma: {pelicula.Language}</p>
      <p>País: {pelicula.Country}</p>
      <p>Puntaje IMDb: {pelicula.imdbRating}</p>
      </div>
    </div>
  )
}

export default movieDetail