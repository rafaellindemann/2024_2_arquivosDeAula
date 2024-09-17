import Navbar from '../components/Navbar'
import {useContext} from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

function Home() {
    const {usuarioLogado, usuarios, setUsuarios} = useContext(GlobalContext)
    function adicionarUsuario(){
        let usuarioNovo = {
            id: Date.now(),
            nome: "Capitão Ganso",
            email: "capitao@juliaroger.com"
        }
        setUsuarios([...usuarios,usuarioNovo])
    }
  return (
    <div>
        <Navbar />
      <h1>Home page do site</h1>
       <p>
        Olá {usuarioLogado}
        </p> 
        <div>
            {
                usuarios.map((usuario) => (
                    <div key={usuario.id}>
                        <p>Nome: {usuario.nome}</p>
                        <p>E-mail: {usuario.email}</p>
                        <p>{usuario.id}</p>
                    </div>
                ))
            }
        </div>
        <div>

            <button onClick={adicionarUsuario}>Adicionar usuário</button>
        </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consectetur veritatis culpa, adipisci voluptatibus doloribus officia at. A nihil odit quasi ea incidunt repellendus neque architecto, eum, debitis temporibus tempore.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsum quo placeat, harum repellendus, neque optio exercitationem perspiciatis quod itaque eos illum. Voluptate repellat distinctio doloremque praesentium aperiam? Repellat, dolorum.</p>
    </div>
  )
}

export default Home
