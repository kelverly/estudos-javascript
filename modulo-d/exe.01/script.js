function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let min = new Date 
    let minut = min.getMinutes()
    msg.innerHTML = ` Agora são ${hora} horas e ${minut} minutos:`
    if (hora >= 0 && hora < 12){
        img.src = 'img/manha.png'
        document.body.style.background = '#6494ed60'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'img/tarde.png'
        document.body.style.background = '#ed646460'
    }else{
        img.src = 'img/noite.png'
        document.body.style.background = '#313131cc'
    }
    
}
