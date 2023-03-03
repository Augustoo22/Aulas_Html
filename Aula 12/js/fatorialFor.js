var btn = document.getElementById('btnCalcular')
btn.addEventListener("click",executar)

function executar(){
    let n1 = parseint(document.getElementById('n1').value)
    let result = parseint(document.getElementById('result').value)
    let res = 1

    for(let i = n1; i>=1; i--){
        res = res * i
    }
    result.innerText = res
}