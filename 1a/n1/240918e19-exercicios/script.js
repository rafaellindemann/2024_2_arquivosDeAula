


function executar1038(){
    // ler o código
    let codigo = Number(prompt("Digite o código:"))
    
    // ler a quantidade
    let quantidade = Number(prompt("Quantidade: "))
    
    // definir o preço do produto
    let preco
    if(codigo == 1){
        preco = 4
    }else if(codigo == 2){
        preco = 4.5
    }else if(codigo == 3){
        preco = 5
    }else if(codigo == 4){
        preco = 2
    }else if(codigo == 5){
        preco = 1.5
    }else{
        alert('Digita o código direito aí ô')
    }
    
    // calcular o valor da conta (preço * quantidade)
    let valor = preco * quantidade
    alert("Sua conta deu: R$" + valor)
    
    
}

function simularCorrida(){
    let distancia = Number(prompt("Qual a distância desejada?"))
    let distanciaX = 0;
    let distanciaY = 0
    tempo = 0
    
    while(distanciaY-distanciaX < distancia){
        distanciaX += 1
        distanciaY += 1.5
        tempo++
        console.log('y: ' + distanciaY);
        console.log('x: ' + distanciaX);
        console.log('Tempo: ' + tempo);
        console.log('Diferença: ' + (distanciaY-distanciaX));
        console.log('--------------------');
    }
    alert("Vai levar " + tempo + " minutos")
}

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


// if(numero == 1){
//     alert(1)
// }else{
    
// }
// if(numero == 1){
//     alert(1)
// }else if(numero == 2){
//     alert(2)
// }else if(numero == 3){
//     alert(3)
// }


if(x>0 && y>0){
    alert("Q1")
}else if(x>0 && y<0){
    ...
}