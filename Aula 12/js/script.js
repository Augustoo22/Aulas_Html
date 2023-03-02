var btn = document.getElementById("btnCalcular")
btn.addEventListener('click',mdc)

function mdc(){
    let n1 = parseInt(document.getElementById('n1').value)
    let n2 = parseInt(document.getElementById('n2').value)
    let result = document.getElementById('result')
    let crtl

    if(n1>n2){
        for(crtl = n2;crtl >= 1;crtl--){
            
            if(n1%crtl==0 && n2%crtl==0){
                result.innerText=crtl
                break
            }


        }
    }

    else{
        for(crtl = n1;crtl >= 1;crtl--){
            
            if(n1%crtl==0 && n2%crtl==0){
                result.innerText=crtl
                break
            }

            
        }
    }

}