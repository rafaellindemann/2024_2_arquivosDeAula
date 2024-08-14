import { useState } from 'react';
import './App.css'

function App() {
  const [contador, setContador] = useState(0);
  let cont = 0;

  function tratarClique(){
    cont++;
    alert('cont: ' + cont)
  }
  function incrementarState(){
    setContador(contador + 1)
  }
  return (
    <>
      <h1>Teste de botão</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione obcaecati assumenda.</p>
      <button onClick={tratarClique}>Clique</button>
      <div>
        {cont}
      </div>
      <button onClick={incrementarState}>Incrementar State</button>
      <div>
        {contador}
      </div>

    </>
  )
}

export default App
