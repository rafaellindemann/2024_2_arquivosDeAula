
let idades = [14, 22, 34, 20, 23, 55, 45]
let arrayVazio = []

function pesquisar(){
    // console.log(idades);
    // let nome = prompt("Digite seu nome: ")
    // console.log(nome);

    let numero = Number(prompt("Qual número você quer pesquisar?"))

    let indice = idades.indexOf(numero)
    if(indice != -1){
        console.log("Achei! Está na posição: " + indice);
    }else{
        console.log("Valor não encontrado :P");
    }
    // console.log(idades.indexOf(numero));
}

function cadastrar(){
    let numero = Number(prompt("Digite o número para cadastrar:"))
    idades.push(numero)

    // idades.push(Number(prompt("Digite o número para cadastrar:")))
    console.log(idades);
}

function mostrarTodos(){
    // console.log(idades);
    // alert("Vá olhar seu array no console :D")
    // alert(idades)
    // let i = 0
    // console.log(idades[i]);
    // i = 1
    // console.log(idades[i]);
    // i = 2
    // console.log(idades[i]);
    // i = 3
    // console.log(idades[i]);
    
    for(let i=0; i<idades.length; i++){
        // console.log(idades[i]);
        document.getElementById('saida').innerHTML += 
            // "Aluno: " + idades[i] + "<br>"
            "<p>Aluno: " + idades[i] + "</p>"
    }
}



