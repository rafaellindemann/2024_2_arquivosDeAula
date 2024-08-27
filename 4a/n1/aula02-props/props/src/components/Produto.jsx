import './Produto.css'
function Produto(props) {
    let p = props.produto
  return (
    <div className="produto-container">
      {/* {props.produto.nome} */}
      <h2>
        {p.nome}
      </h2>
      <p>{p.descricao}</p>
      <p>Peso: {p.peso}kg</p>
      <p>R${p.preco.toFixed(2)}</p>
    </div>
  )
}

export default Produto
