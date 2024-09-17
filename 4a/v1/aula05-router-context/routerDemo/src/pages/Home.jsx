import Navbar from '../components/Navbar'
import {useContext} from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

function Home() {
    const {usuarioLogado} = useContext(GlobalContext)
  return (
    <div>
        <Navbar />
      <h1>Home page do site</h1>
       <p>
        Olá {usuarioLogado}
        </p> 
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consectetur veritatis culpa, adipisci voluptatibus doloribus officia at. A nihil odit quasi ea incidunt repellendus neque architecto, eum, debitis temporibus tempore.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsum quo placeat, harum repellendus, neque optio exercitationem perspiciatis quod itaque eos illum. Voluptate repellat distinctio doloremque praesentium aperiam? Repellat, dolorum.</p>
    </div>
  )
}

export default Home
