import React from 'react'
import Navbar from '../components/Navbar'
import './Agua.css'

import { GlobalContext } from '../contexts/GlobalContext'
import { useContext } from 'react'

function Agua() {
    const {bairro} = useContext(GlobalContext)
  return (
    <div className='agua-container'>
        <Navbar />  
        <h1>Água</h1>
        <p>Uma página com conteúdo muito fluído, mas meio sem gosto na minha opinião.</p>
        <p>No bairro {bairro} tem muita água.</p>
    </div>
  )
}

export default Agua
