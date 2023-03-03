let n1 = [3,4,1,5,9]
let n2 = []

//console.log(n.indexOf(4)) exibir em que posição está o numero 4

//console.log(n) vai exibir todos itens do vetor

//console.log(n.length) exibe o tamanho do vetor

for(let i=0;i<n1.length;i++){
    n2[(n1.length-1)-i]=n1[i]
}

console.log(n1)
console.log(n2)