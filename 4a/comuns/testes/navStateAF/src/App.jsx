import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import Contato from './pages/Contato'

function App() {
  const [saida, setSaida] = useState(<Home />)

  return (
    <>
      <button onClick={() => {setSaida(<Home />)}}>Home</button>
      <button onClick={() => {setSaida(<Contato />)}}>Contato</button>
      {saida}

    </>
  )
}

export default App
