import {useState, useContext} from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'

function Cadastro() {
    const{contatinho, setContatinho} = useContext(GlobalContext)
    const[inputNome, setInputNome] = useState('')
    function cadastrarContatinho(){
        setContatinho(inputNome)
    }
  return (
    <div>
        <Navbar />
        <h1>Cadastre seu contatinho</h1>
        <div className="input-container">
            <label htmlFor="">Nome</label>
            <input type="text" 
                value={inputNome}
                onChange={(event) => setInputNome(event.target.value)}
            />
        </div>
        {/* {inputNome} */}
        {contatinho}
        <button onClick={cadastrarContatinho}>Cadastrar contatinho</button>
    </div>
  )
}

export default Cadastro
