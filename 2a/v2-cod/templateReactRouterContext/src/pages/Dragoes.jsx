import Navbar from '../components/Navbar'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'


function Dragoes() {
    const {diaDeHoje, setDiaDeHoje} = useContext(GlobalContext)
    function trocarDia(){
        let dia = prompt("Que dia hoje?")
        setDiaDeHoje(dia)
    }
  return (
    <div>
        <Navbar />
      <h1>Dragões</h1>
      <p>Porque eles são legalzões, menos no dia {diaDeHoje}.</p>
      <button onClick={trocarDia}>Trocar dia</button>
    </div>
  )
}

export default Dragoes
