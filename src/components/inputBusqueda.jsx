function InputBusqueda({ busqueda, setBusqueda }) {
  return (
    <input className="search-input"
      type="text"
      placeholder="Escribí una película o serie"
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
    />
  )
}

export default InputBusqueda
