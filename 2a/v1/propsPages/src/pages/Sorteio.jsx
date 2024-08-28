import './Sorteio.css'
import Titulo from '../components/Titulo'

function Sorteio() {
    function sortear(){
        let n = Math.floor(Math.random()*100)
        alert(n)
    }
  return (
    <div className='sorteio-container'>
      <Titulo texto={"Sorteio"} emoji={"🎲"}/>
      <button className='btn-sortear' onClick={sortear}>Sortear número</button>
    </div>
  )
}

export default Sorteio
