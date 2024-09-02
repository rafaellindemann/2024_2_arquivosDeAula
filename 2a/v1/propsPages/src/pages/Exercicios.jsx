import React, { useState } from 'react'

function Exercicios() {
    const [resultado, setResultado] = useState()
    function rodar525(){
        let preco = Number(prompt("Qual o valor do produto"))
        let moedas1 = Number(prompt("Quantas moedas de R$1,00?"))
        ///...
    }

  return (
    <div>
      
      <button onClick={rodar525}>Exercício 5.25</button>
      {resultado}
    </div>
  )
}

export default Exercicios
