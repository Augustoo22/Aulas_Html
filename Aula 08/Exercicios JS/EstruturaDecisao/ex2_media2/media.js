var btn = document.getElementById('btnCalcular')
btn.addEventListener('click',calcularMedia)

function calcularMedia(){
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    
    let media = ((1*n1)+(2*n2)) / 3

    if(media >= 7){

        document.getElementById('result').innerText = "Aprovado " + media    
    
    }

    else if(media < 5){
        
        document.getElementById('result').innerText = "Reprovado " + media
    }

    else{

        document.getElementById('result').innerText = "Recuperação " + media

    }

    

}