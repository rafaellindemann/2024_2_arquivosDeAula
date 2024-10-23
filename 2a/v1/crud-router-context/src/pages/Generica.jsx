import Navbar from "../components/Navbar"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

function Generica() {
  const {produtoMagico} = useContext(GlobalContext)
  return (
    <div>
        <Navbar />
      <h1>Genérica</h1>
      <p>Coisas genéricas, nada específicas...</p>
      <p>Produto Mágico: {produtoMagico}</p>
    </div>
  )
}

export default Generica
