programa {
  funcao inicio() {
    inteiro n1, n2
    escreva("Digite um número: ")
    leia(n1)
    escreva("Digite mais um número: ")
    leia(n2)
    se(n1 > n2){
      escreva("Primeiro é maior")
    }senao se(n2 > n1){
      escreva("Segundo é maior")
    }senao{
      escreva("São iguais")
    }
  }
}
