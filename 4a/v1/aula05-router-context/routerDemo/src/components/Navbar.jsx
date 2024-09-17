import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/musicas">Músicas</Link>
      <Link to="/filmes">Filmes</Link>
      <Link to="/seriados">Seriados</Link>
    </nav>
  )
}

export default Navbar
