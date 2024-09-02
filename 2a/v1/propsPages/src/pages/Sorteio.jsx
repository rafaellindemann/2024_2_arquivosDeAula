import { useState } from 'react'
import './Sorteio.css'
import Titulo from '../components/Titulo'


function Sorteio() {
  const [numero, setNumero] = useState()

    function sortear(){
        let n = Math.floor(Math.random()*100)
        //alert(n)
        setNumero(n)
    }
  return (
    <div className='sorteio-container'>
      <Titulo texto={"Sorteio"} emoji={"🎲"}/>

      <div className="classeDela"></div>

      <div className="numero">
        {numero}
      </div>
      <button className='btn-sortear' onClick={sortear}>Sortear número</button>
    </div>
  )
}

export default Sorteio
