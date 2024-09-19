import React, {useState} from 'react'

function ViagensAleatorias() {
    const [pessoas, setPessoas] = useState([{altura:1.88, genero:'M'}])

    function mexer(){
        let novaPessoa = {
            altura: 2.80,
            genero: 'F',
        }
        // pessoas.push() do bem
        setPessoas([...pessoas, novaPessoa])

    }
  return (
    <div>
      <button onClick={mexer}>Mexer</button>
      {
        pessoas.map((pessoa, index)=>(
            <div key={index}>
                <p>{pessoa.altura}</p>
                <p>{pessoa.genero}</p>

            </div>
        ))
      }
    </div>
  )
}

export default ViagensAleatorias
