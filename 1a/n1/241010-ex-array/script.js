let numeros = []
let index1, index2, soma

function executar83(){
    // alert("funcionando")
    let numero

    for(let i=0; i<25; i++){
        // numero = Math.ceil(Math.random()*6)
        numero = Math.ceil(Math.random()*1000)
        numeros.push(numero)
    }    
    console.log(numeros);
    document.getElementById('resultado').innerHTML = "Array gerado com absurdo sucesso!"
}

function executar83b(){

    do{
        index1 = Number(prompt("Digite um número entre 0 e 24:"))
    }while(index1 < 0 || index1 > 24)

    do{
        index2 = Number(prompt("Digite outro número entre 0 e 24:"))
    }while(index2 < 0 || index2 > 24)
    // console.log(numeros[index1]);
    // console.log(numeros[index2]);

    soma = numeros[index1] + numeros[index2]
    console.log("Soma: ", soma);

    

    // alert(index1)

    // index1 = 0
    // while(index1 > 0){
    //     alert(index1)
    //     index1--
    // }
    
}

function mostrarArray(){
    // document.getElementById('resultado').innerHTML = "Dado: " + numeros[0] + "<BR>"
    // document.getElementById('resultado').innerHTML += "Dado: " + numeros[1] + "<BR>"
    // document.getElementById('resultado').innerHTML += "Dado: " + numeros[2] + "<BR>"
    
    document.getElementById('resultado').innerHTML = '<h2>Lançamentos do dado:</h2>'
    for(let i=0; i<numeros.length; i++){
        document.getElementById('resultado').innerHTML += "Dado: " + numeros[i] + "<BR>"
    }

}

function pesquisarComFor(){
    let valor = Number(prompt("Digite o valor para pesquisar:"))
    let indice = -1
    for(let i=0; i<numeros.length; i++){
        if(numeros[i] == valor){
            indice = i
        }
    }

    if(indice == -1){
        alert("Não encontrado")
    }else{
        alert("Encontrado: " + indice)
        alert(`Encontrado: ${indice}`)
    }
    
}

function pesquisar(){
    let valor = Number(prompt("Digite o valor para pesquisar: "))
    if(numeros.indexOf(valor) == -1){
        alert("Nana")
    }else{
        alert(`Achei: ${numeros.indexOf(valor)}` )
    }
}
function pesquisarFeia1(){ // não faça isso, não seja essa pessoa
    if(numeros.indexOf(Number(prompt("Digite o valor para pesquisar: "))) == -1){
        alert("Nana")
    }else{
        alert(`Achei: ${numeros.indexOf(valor)}` )
    }
}

// numero = Math.random() // 0.00000000000 a 0.999999999999
// numero = Math.random()*6 // 0.00000000000 a 5.999999999999
// numero = Math.ceil(Math.random()*6) // 1 a 6

// 23.9 >> 23 floor
// 23.9 >> 24 ceil
// 23.9 >> 24 round

// 23.2 >> 23 floor
// 23.2 >> 24 ceil
// 23.2 >> 23 round