//for(contador = 0; contador <10; contador++){
  //  console.log(contador)
//}

/*Array - Vetor (Matriz 1D) - Linha
                (Matriz 2D) - Linha e coluna
                (Matriz 3D) - Linha, Coluna, Camada

Armazena uma sequencia de valores 
No mesmo Array armazenar diferentes valores

    Sintaxe: []

*/

//Declaração

//const numeros = [-1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]


//Forma 1: Acessar pela posição do ITEM
//[0] -> Trás o primeiro item do Array
//console.log(numeros[0])

//Forma 2: Acessar pelo valor ITEM ["1"] ->Busca e retorna o valor como nome

var nomes = ["Corinthians","Flamengo","Palmeiras","Santos","Vasco","São Paulo","São Bento","Ituano","Atlethico Paranaense","Ceara","Internacional","Fluminense","Botafogo","Inter de Limeira","Santo Andre","Volta redonda","Gremio","Juventude","Ponte Preta","Guarani","Portuguesa","Cuiaba","Goias","São Bernado do campo","Cruzeiro","Atletico mineiro","America Mineiro","Rezende","Curitiba","Joinville","Atletico Goianiense","Fortaleza","vila nova","Agua santa","ferroviaria","São Caetano","Bragantino","Bahia","Vitoria","Sport"]

console.log(nomes)

console.log(nomes.length)

for(aluno = 0; aluno<= 42; aluno++){
    console.log(nomes[aluno])
    
nomes.push(1,2,3,)
}

//add itens .push()


//remove itens .pop()

//nomes.pop("ggg")

//nomes.splice(0,1)

for(var aluno = 0; aluno<nomes.length;aluno++){

    if(typeof nomes[aluno] == 'string'){
        console.log('Aluno')
    }
    else{
        numeros.push(aluno)

        nomes.splice(aluno,1)
    }
}