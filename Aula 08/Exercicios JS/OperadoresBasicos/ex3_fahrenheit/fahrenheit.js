var btn = document.getElementById('btnCalcular')
btn.addEventListener('click',calcularMedia)

function calcularMedia(){
    let n1 = Number(document.getElementById('n1').value)

    let result = (n1 * 9/5)+32

    document.getElementById('result').innerText = result
}