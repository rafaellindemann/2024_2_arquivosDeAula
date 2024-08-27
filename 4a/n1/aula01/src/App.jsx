import { useState } from 'react';
import './App.css'

function App() {

  const [contador,setContador] = useState(50)

  let cont = 99;

  function tratarClique(){
    cont++;
    console.log(cont);
  }
  function incrementarContador(){
    setContador(contador + 1)
  }
  return (
    <>
      <h1 className='titulo'>titulo</h1>
      <button onClick={tratarClique}>Clique</button>
      <div>
        {cont}
      </div>

      <button onClick={incrementarContador}>Incrementar</button>
      <div>
        {contador}
      </div>
    </>
  )
}

export default App
