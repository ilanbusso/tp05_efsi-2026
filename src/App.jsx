import { useEffect, useState } from "react"
import Titulo from "./components/titulo"
import InputBusqueda from "./components/inputBusqueda"
import ListaCard from "./components/listaCard"
import Loader from "./components/loader"
import MensajeError from "./components/mensajeError"
import { buscarPeliculas } from "./services/API"

function App() {
  const [busqueda, setBusqueda] = useState("")
  const [peliculas, setPeliculas] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [terminoBusqueda, setTerminoBusqueda] = useState("")

  useEffect(() => {
    if (!terminoBusqueda.trim()) return

    const traerPeliculas = async () => {
      try {
        setLoading(true)
        setError("")

        const data = await buscarPeliculas(terminoBusqueda)

        if (data?.Response === "False" || !data?.Search?.length) {
          setPeliculas([])
          setError("No se encontraron resultados.")
          return
        }

        setPeliculas(data.Search)
      } catch (e) {
        setPeliculas([])
        setError("Ocurrió un error al buscar películas.")
      } finally {
        setLoading(false)
      }
    }

    traerPeliculas()
  }, [terminoBusqueda])

  const manejarSubmit = (e) => {
    e.preventDefault()

    if (!busqueda.trim()) {
      setPeliculas([])
      setError("Ingresá un título para buscar.")
      return
    }

    setTerminoBusqueda(busqueda)
  }

  const inputBase = InputBusqueda("text", "Escribí una película o serie")
  const inputConEventos = {
    ...inputBase,
    props: {
      ...inputBase.props,
      value: busqueda,
      onChange: (e) => setBusqueda(e.target.value)
    }
  }

  return (
    <>
      {Titulo("Buscador de películas y series")}

      <form onSubmit={manejarSubmit}>
        {inputConEventos}
        <button type="submit">Buscar</button>
      </form>

      {loading && <Loader />}
      {!loading && error && <MensajeError mensaje={error} />}
      {!loading && !error && peliculas.length > 0 && <ListaCard peliculas={peliculas} />}
    </>
  )
}

export default App
