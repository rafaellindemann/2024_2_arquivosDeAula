
// { id: , modelo: "", placa: "", ano:  },
function Onibus(props) {
    let onibus = props.onibus
  return (
    <div>
      {/* <h2>Modelo: {props.onibus.modelo}</h2> */}
      <h2>Modelo: {onibus.modelo}</h2>
      <p>Placa: {onibus.placa}</p>
      <p>Ano: {onibus.ano}</p>
      <p>{onibus.id}</p>
    </div>
  )
}

export default Onibus
