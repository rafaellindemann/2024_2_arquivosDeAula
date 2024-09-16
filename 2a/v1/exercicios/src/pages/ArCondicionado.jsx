import { useState } from "react"
import './ArCondicionado.css'
import { FaExchangeAlt } from "react-icons/fa";

function ArCondicionado() {
    const [inputCelsius, setInputCelsius] = useState('')
    const [inputFahrenheit, setInputFahrenheit] = useState('')

    function mudouCelsius(event){
        setInputCelsius(event.target.value)
        let f = event.target.value * 1.8 + 32
        setInputFahrenheit(f.toFixed(1))
    }
    function mudouFahrenheit(event){
        let c = ((event.target.value - 32) / 1.8).toFixed(1)
        setInputFahrenheit(event.target.value)
        setInputCelsius(c)
    }

  return (
    <div>
      <h1>Exercício 5.27</h1>
      <p>5.27 - Ligar o ar condicionado: Faça um programa onde o usuário irá escolher se quer converter graus Celsius para Fahrenheit ou Fahrenheit para Celsius. Após a escolha, faça uma leitura e converta para a unidade escolhida.</p>

        <div className="form-container">
            <div className="input-container">
                <label htmlFor="inpC">Celsius</label>
                <input type="number" id="inpC"
                    value={inputCelsius}
                    onChange={ mudouCelsius }
                />
            </div>
            <div>
                <FaExchangeAlt />
            </div>
            <div className="input-container">
                <label htmlFor="inpF">Fahrenheit</label>
                <input type="number" id="inpF"
                    value={inputFahrenheit}
                    onChange={ mudouFahrenheit }
                />
            </div>
        </div>

        


    </div>
  )
}

export default ArCondicionado

