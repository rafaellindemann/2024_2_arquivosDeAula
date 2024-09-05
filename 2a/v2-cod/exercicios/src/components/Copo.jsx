import { useState } from "react"
import './Copo.css'
function Copo() {
    const [resultado, setResultado] = useState()
    function processarNumero(){
        let numero = Number(prompt("Digite um número: "))
        if(numero > 0){
            setResultado("O número é positivo")
        }else if(numero < 0){
            setResultado("O número é negativo")
        }else{
            setResultado("É zero")
        }
    }
  return (
    <div className="Copo-container">
      <h2>Copo meio cheio</h2>
      <button onClick={processarNumero}>Processar</button>
      <div>
        {resultado}
      </div>
    </div>
  )
}

export default Copo
