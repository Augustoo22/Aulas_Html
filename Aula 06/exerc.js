/*console.log("Ola")

var n = 10 

if(n<8){
    console.log("É menor")
    console.log("Entrou no IF")
}

else{
    console.log("É maior")
    console.log("Entrou no Else")
}


var n1 = 10
var n2 = 5.5
var resultado 

resultado = n1 + n2
resultado = resultado / 2

if(resultado >= 7){
    console.log("Foi Aprovado " + resultado)
}

else if (resultado >= 5){
    console.log("Recuperação " + resultado)
}

else {
    console.log("Reprovado " + resultado)
}
*/

var n =2 

switch(n){
    case 1:
        console.log("O valor é 1")
        break

        case 2:
            case 1:
        console.log("O valor é 2")
        break

        default:
            case 1:
        console.log("O valor é qualquer")
        break
}

var data = new Date()
var hora = data.getHours()
var dia = data.getDay()

/*
0 - domingo
1 - segunda
2 - terça
...
7 - sabado
*/

console.log("Fim")
