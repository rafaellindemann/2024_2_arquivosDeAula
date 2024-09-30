import { useState } from 'react'
import './App.css'

function App() {
  const [fila, setFila] = useState([])

  function gerarSenha(){
    let senha = {
      numero: Date.now(),
      tipo: "normal",
    }
    setFila([...fila, senha])
  }
  function atender(){
    if(fila.length){
      alert(fila[0].numero)
      // let filaTemp = fila
      // filaTemp = filaTemp.splice(0, 1)
      setFila(fila.slice(1))
    }else{
      alert("Não tem ninguém na fila, finge que tá fazendo alguma coisa e vai descansar")
    }
  }


  return (
    <>
        <button onClick={atender}>Atender</button>
        <button onClick={gerarSenha}>Senha Normal</button>
        {fila.map( (senha) => (
          <div key={senha.numero}>
            <p>{senha.numero}</p>
            <p>{senha.tipo}</p>
          </div>
        ) )}
    </>
  )
}

export default App
