import Navbar from "../components/Navbar"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
function Home() {
    const {usuarioLogado, usuarios, setUsuarios} = useContext(GlobalContext)

    function inventarUsuario(){
        let usuarioNovo = {
            id: Date.now(),
            nome: "Capitão Ganso",
            email: "capitao@juliarobert.com"
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
      <button onClick={inventarUsuario}>Inventar usuario</button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloremque quos incidunt omnis vero quidem officia quaerat, mollitia accusantium dignissimos debitis soluta maxime laborum? Quo omnis eum labore animi assumenda!</p>
    </div>
  )
}

export default Home
