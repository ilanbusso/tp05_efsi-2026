import './App.css'
import { useState } from 'react'
import { buscarPeliculas } from './services/movieApi'
import Titulo from './components/titulo'
import InputBusqueda from './components/inputBusqueda'
import ListaCard from './components/listaCard'
import Loader from './components/loader'
import MensajeError from './components/mensajeError'

function App() {
  const [busqueda, setBusqueda] = useState('')
  const [peliculas, setPeliculas] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleBuscar = async () => {
    if (!busqueda.trim()) {
      setError('Escribí una búsqueda')
      setPeliculas([])
      return
    }

    setLoading(true)
    setError('')

    try {
      const resultados = await buscarPeliculas(busqueda)
      setPeliculas(resultados)
    } catch (err) {
      setError('Ocurrió un error al buscar películas')
      setPeliculas([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Titulo contenido="Buscador de Películas" />

      <InputBusqueda
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        onBuscar={handleBuscar}
      />

      {loading && <Loader />}
      {error && <MensajeError mensaje={error} />}
      <ListaCard peliculas={peliculas} />
    </>
  )
}

export default App
