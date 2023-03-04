let n1 = [3,4,1,5,9]
let aux = []
//let n2 = []

//console.log(n.indexOf(4)) exibir em que posição está o numero 4

//console.log(n) vai exibir todos itens do vetor

//console.log(n.length) exibe o tamanho do vetor


for(let i=0;i<n1.length;i++){
    
    aux[(n1.length -1)-i]=n1[i]
}
n1 = aux.slice(0,5)

console.log(n1)
//console.log(n2)