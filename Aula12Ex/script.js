
function Carregar(){
    var msg = window.document.getElementById('Hora')
    var img = window.document.getElementById('Imagem')
    var dia = new Date()
    var hora = dia.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora <= 12){
        img.src = 'Midias/Manha.jpg'
        window.document.body.style.background = '#e2cd9f'
    }else if(hora <= 18){
        img.src = 'Midias/tarde.jpg'
        window.document.body.style.background = '#b9846f'
    }else{
        img.src = 'Midias/noite.jpg'
        window.document.body.style.background = '#515154'
    }
}

