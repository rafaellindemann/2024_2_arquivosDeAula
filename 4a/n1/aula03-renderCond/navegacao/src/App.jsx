import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Viagens from './pages/Viagens'

function App() {
  const [pagina, setPagina] = useState(<Home />)
  
  return (
    <>
      <nav>
        <button onClick={ () => setPagina(<Home />)}>Home</button>
        <button onClick={ () => setPagina(<Viagens />)}>Viagens</button>
        <button onClick={ () => setPagina(<Portfolio />)}>Portfolio</button>
      </nav>
      
      { pagina }
    </>
  )
}

export default App
