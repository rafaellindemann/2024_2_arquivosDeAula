import { useState } from 'react'
import './App.css'
import UsuarioLogado from './components/UsuarioLogado'
import AreaParaMaiores from './components/AreaParaMaiores'
import FacaLogin from './components/FacaLogin'
import Home from './pages/Home'
import Viagens from './pages/Viagens'

function App() {
  const [logado, setLogado] = useState(1)
  const [idade, setIdade] = useState(0)
  const [pagina, setPagina] = useState(<Home />)
  return (
    <>
      <div>
        <button onClick={() => setPagina(<Home />)}>Home</button>
        <button onClick={() => setPagina(<Viagens />)}>Viagens</button>
      </div>
      {pagina}


      <div className='cardRender'>
        { logado && <UsuarioLogado /> }
        
        <button onClick={() => setLogado(true)}>Logar</button>
        <button onClick={() => setLogado(false)}>Deslogar</button>
      </div>

      <div className='cardRender'>
        { idade>=18 && <AreaParaMaiores />}
        <button onClick={() => setIdade(idade - 1)}>-</button>
        {idade}
        <button onClick={() => setIdade(idade + 1)}>+</button>
      </div>

      <div className="cardRender">
        { logado ? <UsuarioLogado /> : <FacaLogin /> }

      </div>

    </>
  )
}

export default App
