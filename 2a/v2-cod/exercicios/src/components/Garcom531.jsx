import { useState } from 'react'
import './Garcom531.css'
import RelatorioEmprestimo from './RelatorioEmprestimo'

function Garcom531() {
    const [inputSalario, setInputSalario] = useState('')
    const [inputEmprestimo, setInputEmprestimo] = useState('')
    const [inputPrestacoes, setInputPrestacoes] = useState('')
    const [stateRelatorio, setStateRelatorio] = useState()

    function analisarEmprestimo(){
        let valorMaximoPrestacao = inputSalario * 0.3
        let valorPrestacao = inputEmprestimo / inputPrestacoes
        if(valorPrestacao < valorMaximoPrestacao){
            // alert("Deu boa")
            let infosRelatorio = {
                situacao: "aprovado",
                maxPrestacao: valorMaximoPrestacao,
                prestacao: valorPrestacao,
                emprestimo: inputEmprestimo,
                prestacoes: inputPrestacoes
            }
            setStateRelatorio(infosRelatorio)
        }else{
            // alert("Deu ruim")
            let infosRelatorio = {
                situacao: "reprovado",
                maxPrestacao: valorMaximoPrestacao,
                prestacao: valorPrestacao,
                emprestimo: inputEmprestimo,
                prestacoes: inputPrestacoes
            }
            setStateRelatorio(infosRelatorio)
        }
    }
  return (
    <div className='garcom-container'>
        <label htmlFor="inpSalario">Salario</label>
        <input type="text" id='inpSalario'
            value={inputSalario}
            onChange={ (event) => setInputSalario(event.target.value) }
            />
        <label htmlFor="inpEmprestimo">Valor do empréstimo:</label>
        <input type="text" id='inpEmprestimo'
            value={inputEmprestimo}
            onChange={ (event) => setInputEmprestimo(event.target.value) }
            />
        <label htmlFor="inpPrestacoes">Qtd de prestações</label>
        <input type="text" id='inpPrestacoes'
            value={inputPrestacoes}
            onChange={ (event) => setInputPrestacoes(event.target.value) }
        />

        <button onClick={analisarEmprestimo}>Analisar empréstimo</button>

        {stateRelatorio && 
            <RelatorioEmprestimo infos={ stateRelatorio } />
        }


        {/* {inputSalario}
        {inputEmprestimo}
        {inputPrestacoes} */}

    </div>
  )
}

export default Garcom531

// 5.31 - Não tem garçom de cara feia: 
// Uma empresa abriu uma linha de 
// crédito para os funcionários. O valor da prestação não pode ultrapassar 
// 30% do salário. Faça um programa que receba o salário, o valor do 
// empréstimo e o número de prestações e informe se o empréstimo pode ser 
// concedido. Nenhum dos valores informados pode ser zero ou negativo.

// entradas: 
//     - salario
//     - valorEmprestimo
//     - numeroPrestacoes

// processamento:
//     - calcular o valor da prestação (valorEmprestimo / numeroPrestacoes)
//     - comparar valorPrestacao < salario*0.3

// saída:
//     - autoriza ou nega o empréstimo