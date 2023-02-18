var btnCalcular = document.getElementById('btnCalcular')

btnCalcular.addEventListener('click', maiorMenor)

function maiorMenor(){

let n1 = Number(document.getElementById('n1').value);
let n2 = Number(document.getElementById('n2').value);

if(n1 == 0){
    document.getElementById('result').innerHTML = n1 + " erro"
}

else if(n1 % n2 == 0){
    document.getElementById('result').innerHTML = n1 + " E multiplo de " + n2
}

else{
    document.getElementById('result').innerHTML = n1 + " não e multiplo de " + n2
}

}