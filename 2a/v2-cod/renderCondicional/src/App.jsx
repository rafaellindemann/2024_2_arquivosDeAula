import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import NaoSei from './pages/NaoSei'
import Contato from './pages/Contato'
import Render from './pages/Render'

function App() {
  const [pagina, setPagina] = useState(<Home />)
  // let idade
  // console.log(idade)
  // console.log(pagina)
  // idade = 19
  // setPagina(19)
  function mostrarHome(){
    setPagina(<Home />)
  }
  return (
    <>
      <nav>
        <button onClick={ mostrarHome } >Home</button>
        {/* <button onClick={ () => {setPagina(<Home />)} } >Home</button> */}
        <button onClick={ () => {setPagina(<Contato />)} } >Contato</button>
        <button onClick={ () => {setPagina(<NaoSei />)} } >Não Sei</button>
        <button onClick={ () => {setPagina(<Render />)} } >Render</button>
      </nav>
      {pagina}
    </>
  )
}

export default App
