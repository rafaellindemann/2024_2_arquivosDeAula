function executar1008(){
    let id, horas, valorHora, salario
    // let id
    // let valorHora
    // let salario
    id = Number(prompt("Digite seu id: "))
    // id = Number('45')
    // id = 45
    horas = Number(prompt("Quantas horas você trabalhou?"))
    valorHora = Number(prompt("Quanto você ganha por hora?"))

    salario = horas * valorHora

    alert("ID: " + id + "\nSalário: R$" + salario.toFixed(2))

}


// comissao = vendas * 15/100
// comissao = vendas * 0.15