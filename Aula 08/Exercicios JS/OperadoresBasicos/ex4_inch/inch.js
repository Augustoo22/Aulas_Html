var btn = document.getElementById('btnCalcular')
btn.addEventListener('click',calcularMedia)

function calcularMedia(){
    let n1 = Number(document.getElementById('n1').value)

    let result = n1 * 0.0393700787

    document.getElementById('result').innerText = result + "\""
}