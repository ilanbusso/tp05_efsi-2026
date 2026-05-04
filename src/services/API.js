import axios from "axios"

const API_KEY = "324e9101"
const BASE_URL = "https://www.omdbapi.com/"

export async function buscarPeliculas(titulo) {
    const respuesta = await axios.get(BASE_URL, {
        params: {
            apikey: API_KEY,
            s: titulo
        }
    })

    return respuesta.data
}

export async function obtenerDetallePelicula(id) {
    const respuesta = await axios.get(BASE_URL, {
        params: {
            apikey: API_KEY,
            i: id
        }
    })

    return respuesta.data
}