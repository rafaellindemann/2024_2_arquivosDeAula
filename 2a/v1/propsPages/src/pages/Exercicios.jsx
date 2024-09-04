import React, { useState } from 'react'
import './Exercicio.css'
function Exercicios() {
    const [resultado, setResultado] = useState("Valor inicial")
    const [fundo, setFundo] = useState('alto')
    function rodar525(){
        // let preco = Number(prompt("Qual o valor do produto"))
        // let moedas1 = Number(prompt("Quantas moedas de R$1,00?"))
        ///...
        // setResultado(`${preco} ${moedas1}`)
        setFundo('baixo')
    }

  return (
    <div className={fundo}>
      
      <button onClick={rodar525}>Exercício 5.25</button>
      {resultado}
    </div>
  )
}

export default Exercicios
