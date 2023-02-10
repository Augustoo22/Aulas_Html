var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
var dia = data.getDay()

console.log(data)

console.log(dia)

switch (hora) {
    case 12: 
    case 13: 
    case 14: 
    case 15: 
    case 16:
    case 17:
        console.log("Boa tarde agora são: " + hora + ':' + minutos)
        break
    
    case 18:
    case 19:
    case 20: 
    case 21: 
    case 22: 
    case 23:
        console.log("Boa noite agora são: " + hora + ':' + minutos)   
        break

        default:
            console.log("Bom dia agora são: " + hora + ':' + minutos)
            break
}