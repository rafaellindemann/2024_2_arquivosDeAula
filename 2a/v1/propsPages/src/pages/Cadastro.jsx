import Titulo from '../components/Titulo'
import './Cadastro.css'
function Cadastro() {
    function cadastrar(){
        alert("Cadastrado com 'sucesso'")
    }
  return (
    <div className='cadastro-container'>
      <Titulo texto={"Cadastro"} emoji={"👓"}/>
      <label>Nome</label>
      <input type="text" />
      <label>Altura</label>
      <input type="text" />
      <button onClick={cadastrar}>Cadastrar</button>

    </div>
  )
}

export default Cadastro
