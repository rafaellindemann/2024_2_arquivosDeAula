
function calcularAposentadoria(){
    let idade = document.getElementById('inpCachorro').value
    let idadeHumana = idade * 7

    if(idadeHumana >= 65){
        document.getElementById('resultadoCacchorro').innerHTML = 'O cachorro pode se aposentar, tem ' + idadeHumana + ' anos humanos'
    }else{
        document.getElementById('resultadoCacchorro').innerHTML = 'O cachorro NÃO pode se aposentar, tem ' + idadeHumana + ' anos humanos'

    }
}


function calcularIMC(){
    let peso = document.getElementById('inpPeso').value
    let altura = document.getElementById('inpAltura').value

    // let imc = peso / (altura * altura)
    let imc = peso / (altura**2)

    // document.getElementById('inpResultado').value = "Seu IMC é: " + imc
    document.getElementById('pResultado').innerHTML = "Seu IMC é: " + imc.toFixed(2)

    // alert("Se fosse o Jack, ele diria que o imc é: " + imc)
    // console.log(peso);
}