programa {
  funcao inicio() {
    inteiro n1, n2
    escreva("Digite um n�mero: ")
    leia(n1)
    escreva("Digite mais um n�mero: ")
    leia(n2)
    se(n1 > n2){
      escreva("Primeiro � maior")
    }senao se(n2 > n1){
      escreva("Segundo � maior")
    }senao{
      escreva("S�o iguais")
    }
  }
}
