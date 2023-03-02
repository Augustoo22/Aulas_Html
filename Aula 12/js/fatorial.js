var btn = document.getElementById('btnCalcular')
btn.addEventListener("click",executar)


function executar(){
    let n1 = parseInt(document.getElementById('n1').value)
    var result = document.getElementById('result')
    var fatorial = n1 - 1

    if(n1>fatorial){
        result.innerText= mdc(n1,fatorial)
    }else{
        result.innerText= mdc(fatorial,n1)
    }
}

function mdc(maior, menor){
    if(menor == 0)
        return maior
    
    return mdc(menor * maior, menor-1)
}