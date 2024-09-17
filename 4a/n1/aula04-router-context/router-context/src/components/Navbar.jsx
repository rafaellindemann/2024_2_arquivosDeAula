import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/generica">Genérica</Link>
    </nav>
  )
}

export default Navbar
