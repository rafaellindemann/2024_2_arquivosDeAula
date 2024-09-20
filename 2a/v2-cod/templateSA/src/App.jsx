
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import BichinhosFofinhos from './pages/BichinhosFofinhos'
import Comidas from './pages/Comidas'

function App() {
  const [pagina, setPagina] = useState(<Home />)

  return (
    <>
      <nav>
        <button onClick={() => setPagina(<Home />)}>Home</button>
        <button onClick={() => setPagina(<BichinhosFofinhos />)}>Bichinhos</button>
        <button onClick={() => setPagina(<Comidas />)}>Comidas</button>

      </nav>
      {pagina}
      {/* <Home /> */}
    </>
  )
}

export default App
