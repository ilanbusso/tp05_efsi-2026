import './App.css'
import { useState } from "react"
import { buscarPeliculas, obtenerDetallePelicula } from "./services/movieApi"
import Titulo from "./components/titulo"
import InputBusqueda from "./components/inputBusqueda"
import ListaCard from "./components/listaCard"
import MovieDetail from "./components/movieDetail"
import Loader from "./components/loader"
import ErrorMessage from "./components/errorMessage"

function App() {
  const [peliculas, setPeliculas] = useState([])
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [sinResultados, setSinResultados] = useState(false)


  return (
    <>
      
    </>
  )
}

export default App
