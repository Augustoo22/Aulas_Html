var btnCalcular = document.getElementById('btnCalcular')

btnCalcular.addEventListener('click', maiorMenor)

function maiorMenor(){

let n1 = Number(document.getElementById('n1').value);
let n2 = Number(document.getElementById('n2').value);

if(n1 > n2){
    document.getElementById('result').innerHTML = n1 + " E maior"
}

else if(n1 < n2){
    document.getElementById('result').innerHTML = n2 + " E maior"
}

else{
    document.getElementById('result').innerHTML = " são iguais"
}

}