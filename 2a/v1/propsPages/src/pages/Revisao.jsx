import React, { useState } from 'react'

function Revisao() {
    
    function mudarCoisasGenericas(){
        variavel++
        console.log(variavel)
        setEstado(estado + 1)
    }
    // criação
    let variavel = 0
    const [estado, setEstado] = useState(0)
    // const [idade, setIdade] = useState()

    // alterações
    // variavel = 10
    // document.getElementById("algumElemento").innerHTML = variavel

    // setEstado(10)

    // setEstado(variavel)
    // setEstado((variavel+22)/2)
    //faço nada, oras


  return (
    <div>
        <p>Valor do estado: {estado}</p>
        <p>Valor da variável: {variavel}</p>
      <button onClick={mudarCoisasGenericas}>Alterar: {estado}</button>
    </div>
  )
}

export default Revisao
