/* var num = [3,6,1,7,9,4,2]
var aux 


console.log(num)

for(var contAux=0; contAux<num.length;contAux++){
    for(var cont=0; cont<num.length-1; cont++){
        if(num [cont] > num [cont+1]){
            aux = num[cont]
            num[cont] = num[cont+1]
            num[cont+1] = aux
        }
    }
}

console.log(num)
 */

/*
console.log(num)

for(var i=0;i<num.length;i++){

    for(var j=0; j<num.length-1; j++){
        if(num [j] > num [j+1]){
            aux = num[j]
            num[j] = num[j+1]
            num[j+1] = aux
        }
    }
}

console.log(num) */

//crie um vetor com numero diversos e verifique se existe e em qual posição
// esta um determinado numero neste valor

var num = [2,51,2,3,4,6,334,23,432,43,12]
var n1 = 7
var n2 = 2 

console.log(num.indexOf(n1)+" n1 valor não existe")
console.log(num.indexOf(n2)+" n2 valor  existe")

//Resposta esperada: numero 7 não existe
//n = 2
// resposta esperada: numero 2 nas posiçoes : 0, 2