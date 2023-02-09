var nome =  window.prompt("Digite seu nome")
var idade =  Number.parseInt(window.prompt("Digite sua idade:"))


if (idade >= 18) {
    window.alert("Bem vindo(a) " + nome + " voce tem " + idade + " maior de idade")
}

else {
    window.alert("Recusado " + nome + " voce tem " + idade + " menor de idade")
}