import { useState, useContext } from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'
import './Cadastro.css'






function Cadastro() {
    const { contatinho, setContatinho, contatinhos, setContatinhos } = useContext(GlobalContext)
    const [inputNome, setInputNome] = useState('')
    function cadastrarContatinho() {
        // setContatinho(inputNome)
        setContatinhos([...contatinhos, inputNome])
        console.log(contatinhos);
        
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
            <div className="contatinhos">
                {contatinhos.map( (c, index) => (
                    <div className='card-contatinho' key={index}>
                        <p>{c}</p>
                    </div>
                ) )}
            </div>
        </div>
    )
}

export default Cadastro
