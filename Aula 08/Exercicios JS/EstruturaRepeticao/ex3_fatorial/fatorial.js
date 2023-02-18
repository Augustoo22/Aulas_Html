var btn = document.getElementById('btnCalcular')
btn.addEventListener('click',contar)

function contar(){
    let n1 = Number.parseInt(document.getElementById('n1').value)
    let inicio = 1
    let resultado = 1 


    while(inicio <= n1){
        resultado = resultado * inicio
        inicio++
        
    }
    document.getElementById('result').innerText = resultado
}