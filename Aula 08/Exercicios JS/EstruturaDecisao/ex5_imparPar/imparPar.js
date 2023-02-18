var btnCalcular = document.getElementById('btnCalcular')

btnCalcular.addEventListener('click', maiorMenor)

function maiorMenor(){

let n1 = Number.parseInt(document.getElementById('n1').value);

if(n1 & 1){
    document.getElementById('result').innerHTML = n1 + " E impar"
}

else {
    document.getElementById('result').innerHTML = n1 + " E par"
}



}