
function rodar1142(){
    let cont = 1
    let contagemPUMs = 0
    let limitePUMs = Number(prompt("Quantos PUMs?"))
    let acumulador = ''
    // let i
    while(contagemPUMs < limitePUMs){
        if(cont % 4 != 0){
            console.log(cont)
            acumulador += cont + ' '
        }else{
            console.log("PUM")
            contagemPUMs++
            acumulador += "PUM\n"
        }
        cont++
    }
    alert(acumulador)
}