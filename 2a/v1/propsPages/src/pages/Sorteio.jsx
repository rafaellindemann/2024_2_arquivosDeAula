import { useState } from 'react'
import './Sorteio.css'
import Titulo from '../components/Titulo'


function Sorteio() {
  const [numero, setNumero] = useState()
  // const [dado, setDado] = useState(1)

    function sortear(){
        let n = Math.floor(Math.random()*100)
        //alert(n)
        setNumero(n)
    }
    function aumentar(){
      setNumero(numero + 1)
    }
    function diminuir(){
      setNumero(numero - 1)
    }
  return (
    <div className='sorteio-container'>
      <Titulo texto={"Sorteio"} emoji={"🎲"}/>

      <button onClick={aumentar}>+</button>
      <div className="numero">
        {numero}
      </div>
      <button onClick={diminuir}>-</button>
      <button className='btn-sortear' onClick={sortear}>Sortear número</button>
    </div>
  )
}

export default Sorteio
