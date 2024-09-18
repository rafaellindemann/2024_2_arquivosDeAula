import React, { useState } from 'react'
import NotaFiscal from '../components/NotaFiscal'

function Albergue() {
    const [inputDiarias, setInputDiarias] = useState('')
    const [resultado, setResultado] = useState('')

    function calcular(){
        let valorDiaria
        if(inputDiarias <= 5){
            valorDiaria = 100
        }else if(valorDiaria <= 10){
            valorDiaria = 90
        }else{
            valorDiaria = 80
        }

        let totalBruto = inputDiarias * valorDiaria
        let descontoEmocional = totalBruto * 0.1
        let descontoUber = totalBruto * 0.15
        let multa = 150
        let totalLiquido = totalBruto - descontoEmocional - descontoUber + multa

        let obj = {
            bruto: totalBruto,
            descontoE: descontoEmocional,
            descontoU: descontoUber,
            multa: multa,
            liquido: totalLiquido
        }
        setResultado(obj)
    }
  return (
    <div>
      <h1>Albergue - 5.7</h1>
        <div className="input-container">
            <label htmlFor="inpDiarias">Diárias</label>
            <input type="number" id="inpDiarias"
                value={inputDiarias}
                onChange={ (event) => setInputDiarias(event.target.value) }
            />
            {/* {inputDiarias} */}
        </div>
        <button onClick={calcular}>Calcular</button>

        {resultado && 
            <NotaFiscal infos={resultado}/>
        }


    </div>
  )
}

export default Albergue


// frutas = ["laranja", "pera", "uva"]


// frutas = [frutas, "frutaNova"]
// frutas = [["laranja", "pera", "uva"], "frutaNova"]

// frutas = [...frutas, "frutaNova"]
// frutas = ["laranja", "pera", "uva", "frutaNova"]