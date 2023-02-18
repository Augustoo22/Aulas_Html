var btn = document.getElementById('btnCalcular')
btn.addEventListener('click',calcularMedia)

function calcularMedia(){
    let n1 = Number(document.getElementById('n1').value)

    let result = n1 * 1.609344

    document.getElementById('result').innerText = result
}