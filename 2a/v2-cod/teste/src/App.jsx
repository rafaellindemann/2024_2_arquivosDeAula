import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let variavel = 0;
function App() {
  const [estado, setEstado] = useState(0)


  function aumentar(){
    variavel++;
    console.log(variavel);
    
    setEstado(estado + 1)
  }

  return (
    <>
      {variavel} <br />
      {estado}

      <button onClick={aumentar}>Aumentar</button>
    </>
  )
}

export default App
