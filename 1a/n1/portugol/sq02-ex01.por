programa {
  funcao inicio() {
    inteiro idade
    escreva("Digite sua idade: ")
    leia(idade)
    se(idade >= 18){
      escreva("Maior de idade")
    }senao{
      se(idade >= 12){
        escreva("Aaaaaadolescente :P")
      }senao{
        escreva("Voc� � uma crian�a feliz")
      }
    }
  }
}
