//window.document.write("Ola mundo")

//window.document.write(window.document.charset)

//window.document.write(window.document.URL)

//Busca por <tag> HTML
// var p = window.document.getElementsByTagName('p')[1]
//window.document.write(p.innerHTML)
//window.alert(p.innerHTML)
//window.alert(p.innerText)

//Busca por id
//var p = window.document.getElementById('p1')
//window.document.write(p.innerHTML)

//Busca por Class
//var p = window.document.getElementsByClassName('p1')[0]
//window.document.write(p.innerHTML)

//Busca por nome
//var p = window.document.getElementsByName('paragrafo')[0]
//window.document.write(p.innerHTML)

//Por seletor
//var p = window.document.querySelector('p.p1')
//window.document.write(p.innerText)
//var p = window.document.querySelector('p#p2')
//window.document.write(p.innerText)

var box = window.document.getElementById("click")
box.addEventListener("mouseenter", entrar)
box.addEventListener("mouseout", sair)
box.addEventListener("click", clicar)

function entrar(){
    
    box.style.background="yellow"
    box.style.color="green"
}

function sair(){
    box.style.background="green"
    box.style.color="yellow"
    box.innerText="Click em mim"
}

function clicar(){
    box.innerText="..."
}