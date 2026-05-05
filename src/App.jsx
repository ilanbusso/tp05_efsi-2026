import { useEffect, useState } from "react"
import Titulo from "./components/titulo"
import InputBusqueda from "./components/inputBusqueda"
import ListaCard from "./components/listaCard"
import MovieDetail from "./components/movieDetail"
import Loader from "./components/loader"
import MensajeError from "./components/mensajeError"
import { buscarPeliculas, buscarDetalle } from "./services/API"

function App() {
  const [busqueda, setBusqueda] = useState("")
  const [peliculas, setPeliculas] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [terminoBusqueda, setTerminoBusqueda] = useState("")
  const [idSeleccionado, setIdSeleccionado] = useState("")
  const [detallePelicula, setDetallePelicula] = useState(null)


  useEffect(() => {
    if (!terminoBusqueda.trim()) return

    const traerPeliculas = async () => {
      setLoading(true)
      setError("")

      const data = await buscarPeliculas(terminoBusqueda)

      if (data.Response === "False" || !data.Search || data.Search.length === 0) {
        setPeliculas([])
        setError("No se encontraron resultados.")
      } else {
        setPeliculas(data.Search)
      }

      setLoading(false)
    }

    traerPeliculas()
  }, [terminoBusqueda])

  useEffect(() => {
    if (!idSeleccionado) return

    const traerDetalle = async () => {
      const data = await buscarDetalle(idSeleccionado)
      setDetallePelicula(data)
    }

    traerDetalle()
  }, [idSeleccionado])

  const manejarSubmit = (e) => {
    e.preventDefault()

    if (!busqueda.trim()) {
      setPeliculas([])
      setError("Ingresá un título para buscar.")
      return
    }

    setTerminoBusqueda(busqueda)
  }

  const manejarSeleccion = (id) => {
    setIdSeleccionado(id)
  }



  return (
    <>
      {Titulo("Buscador de películas y series")}

      <form onSubmit={manejarSubmit}>
        <InputBusqueda busqueda={busqueda} setBusqueda={setBusqueda} />
        <button type="submit">Buscar</button>
      </form>

      {loading && <Loader />}
      {!loading && error && <MensajeError mensaje={error} />}
      {!loading && !error && peliculas.length > 0 && (
        <ListaCard peliculas={peliculas} onSeleccionar={manejarSeleccion} />
      )}

      {detallePelicula && <MovieDetail pelicula={detallePelicula} />}
    </>
  )
}

export default App
