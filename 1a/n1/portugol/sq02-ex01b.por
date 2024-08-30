programa {
  funcao inicio() {
    inteiro idade
    escreva("Digite sua idade: ")
    leia(idade)
    //se(idade == 20) escreva("Você tem 20\n")
    se(idade >= 18){
      escreva("Maior de idade")
    }senao se(idade >= 12){
        escreva("Aaaaaadolescente :P")
    }senao{
      escreva("Você é uma criança feliz")
    }
  }
}

