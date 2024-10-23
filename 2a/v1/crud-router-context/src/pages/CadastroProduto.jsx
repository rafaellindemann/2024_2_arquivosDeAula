import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'
import './CadastroProduto.css'


function CadastroProduto() {
    const {produtos, setProdutos} = useContext(GlobalContext)

    const[inputNome, setInputNome] = useState('')
    const[inputPreco, setInputPreco] = useState('')

    useEffect(() => {
        console.log(produtos);
        console.table(produtos);
    },[produtos])

    function cadastrarProduto(){
        let produto = {
            id: Date.now(),
            nome: inputNome,
            preco: inputPreco,
        }
        setProdutos([...produtos, produto])
                        
    }
  return (
    <div>
        <Navbar />
      <h1>Cadastro de produtos</h1>
      <div className="input-container">
        <label htmlFor="">Nome:</label>
        <input type="text"
            value={inputNome}
            onChange={(e) => setInputNome(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="">Preço:</label>
        <input type="text"
            value={inputPreco}
            onChange={(e) => setInputPreco(e.target.value)}
        />
      </div>
      {/* {inputNome} {inputPreco} */}
        <button onClick={cadastrarProduto}>Cadastrar</button>
        <div className='produtos'>
            {produtos.map((p) => (
                <div key={p.id} className='produto-container'>
                    <p>{p.nome}</p>
                    <p>R${p.preco}</p>
                    <p>{p.id}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CadastroProduto
