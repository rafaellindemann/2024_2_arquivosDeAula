import React, {useState} from 'react'

function ArCondicionado() {
    const [inputCelsius, setInputCelsius] = useState()
    const [fahrenheit, setFahrenheit] = useState()

    function mudouCelsius(event){
        console.log(event);
        setInputCelsius(event.target.value)
    }
    function converterCparaF(){
        let f = inputCelsius * 1.8 + 32
        setFahrenheit("Temperatura em graus F: " + f)
    }

  return (
    <div>
      <label htmlFor="">Digite a temperatura em graus Celsius: </label>
      <input type="text" className='entrada'
        value={inputCelsius}
        onChange={mudouCelsius}
      />
      {/* <p>{inputCelsius * 1.8 + 32}</p> */}
      {/* <p>{inputCelsius}</p> */}
      <p>{fahrenheit}</p>

      <button onClick={ converterCparaF }>Converter</button>
    </div>
  )
}

export default ArCondicionado
