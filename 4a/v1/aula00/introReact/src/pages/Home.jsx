import Conteudo from "../components/Conteudo"
import Navbar from "../components/Navbar"
import './Home.css'
function Home() {
  return (
    <div className='home-container'>
      <Navbar />
      <Conteudo />
    </div>
  )
}

export default Home

