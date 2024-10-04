import Navbar from "../components/Navbar"
import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
function Home() {
    const {usuarioLogado, usuarios, setUsuarios} = useContext(GlobalContext)
    const [inputNome, setInputNome] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    function inventarUsuario(){
        let usuarioNovo = {
            id: Date.now(),
            nome: "Capitão Ganso",
            email: "capitao@juliarobert.com"
        }
        setUsuarios([...usuarios, usuarioNovo])
        
      }
      function cadastrarUsuario(){
        let usuarioNovo = {
            id: Date.now(),
            nome: inputNome,
            email: inputEmail
        }
        setUsuarios([...usuarios, usuarioNovo])

    }

  return (
    <div>
        <Navbar />
      <h1>Página home do site</h1>
      <p>Olá {usuarioLogado}</p>
      <div>
        {
            usuarios.map((usuario) => (
                <div key={usuario.id}>
                    <p>Nome: {usuario.nome}</p>
                    <p>E-mail: {usuario.email}</p>
                    <p>{usuario.id}</p>
                </div>
            ) )
        }
      </div>

        <label htmlFor="">Nome</label>
      <input type="text" 
        value={inputNome}
        onChange={(event) => setInputNome(event.target.value)}
      />
      <label htmlFor="">Email</label>
      <input type="text" 
        value={inputEmail}
        onChange={(event) => setInputEmail(event.target.value)}
      />
      <button onClick={cadastrarUsuario}>CADASTRAR</button>
      {/* <button onClick={inventarUsuario}>Inventar usuario</button> */}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloremque quos incidunt omnis vero quidem officia quaerat, mollitia accusantium dignissimos debitis soluta maxime laborum? Quo omnis eum labore animi assumenda!</p>
    </div>
  )
}

export default Home
