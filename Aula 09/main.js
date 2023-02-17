//VAR: Escopo global
//Qualquer um acessa essa variável

/* getElementById - Pega um elemento por ID

    getElemetByClass - Pega um elemento por Classe

    querySelector - Pega um objeto por classe, id.

    querySelectorALL - Pega um objeto por classe, id.
*/





//Eventos...

/* 
    Quando algum evento acontecer, faz uma tarefa

    addEventListener('evento', o que fazer)
*/

var botao_submit = document.getElementById('submit')
var botao_limpar = document.getElementById('limpar')

//chamando o evento para o botao submit
botao_submit.addEventListener('click',coleta_dados)
botao_limpar.addEventListener('click', limpa_dados)

//botao submit

//função - JavaScript
/*
    É um conjunto de tarefas/instruçoes que servirão com um propósito específico para cada tarefa.

    ex: O codigo é sobre cozinhar um bolo uma função, pode ser o ato de ligar o forno.

    Não tem como ligar o forno, se eu não chamar o passo de ligar o forno. (ela não se executa sozinha)
*/
//Coamndo Nome. Parametros

//essa função vai coletar os dados digitados e mostrar no console
function coleta_dados(){
    //coleta o nome
var nome = document.querySelector("#nome").value
//coleta o endereço
var endereco = document.getElementById("endereco").value
//coleta o nascimento
var nascimento = document.querySelector("#nascimento").value
    var nome_coletado = nome
    var ende_coletado = endereco
    var data_coletado = nascimento
    
    console.log(nome_coletado)
    console.log(ende_coletado)
    console.log(data_coletado)
}

function limpa_dados(){
    document.getElementById("nome").value = ""
    document.getElementById("endereco").value = ""
    document.getElementById("nascimento").value = 0
}

