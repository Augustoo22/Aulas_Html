var btn = document.getElementById('btnCalcular')
btn.addEventListener('click',contar)

function contar(){
    let n1 = Number.parseInt(document.getElementById('n1').value)
    let cont = 2;
    let resultado = "Primo" 
    


    while(cont < n1){
        if (n1 % cont == 0){
            resultado = "Não é primo"
        }
        cont++
        
    }
    document.getElementById('result').innerText = resultado
}