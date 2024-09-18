import { useState } from 'react'
import './App.css'
import ArCondicionado from './pages/ArCondicionado'
import Porquinho from './pages/Porquinho'
import Albergue from './pages/Albergue'

function App() {
  const [pagina, setPagina] = useState()
  // const [array, setArray] = useState([])

  // setArray([...array, objeto])
  
  return (
    <>
    <nav>
      <button onClick={() => setPagina(<ArCondicionado />)}>5.27</button>
      <button onClick={() => setPagina(<Porquinho />)}>5.25</button>
      <button onClick={() => setPagina(<Albergue />)}>5.7</button>
    </nav>
      { pagina }
    </>
  )
}

export default App
