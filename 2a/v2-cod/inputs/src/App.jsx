import { useState } from 'react'
import './App.css'
import Maior from './components/Maior'
import Menor from './components/Menor'

function App() {
  const [inputIdade, setInputIdade] = useState(0)
  const [maior, setMaior] = useState(false)
  const [menor, setMenor] = useState(false)
  function processarIdade(){
    if(inputIdade >= 18){
      // alert('Maior de idade')
      setMaior(true)
      setMenor(false)
    }else{
      // alert('Dimenó')
      setMenor(true)
      setMaior(false)
    }
  }
  return (
    <>
      <h1>Inputs</h1>
      Idade: 
      <input type="number" className='formularios'
        value={inputIdade}
        onChange={ (event) => {setInputIdade(event.target.value)} }
      />
      <button onClick={processarIdade}>Processar idade</button>
      {/* {inputIdade} */}
      { maior && <Maior />}
      { menor && <Menor />}

    </>
  )
}

export default App
