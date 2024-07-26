function verificar(){
    let data = new Date ()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[Erro] Verifique os dados e tente novamente!')
    }else{
        let fsex = document.getElementsByName('rasex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if ( idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/crianca2.png')
            } else if (idade < 21){
                img.setAttribute('src', 'img/jovem2.png')
            } else if (idade < 50){
                img.setAttribute('src', 'img/adulto2.png')
            }else{
                img.setAttribute('src', 'img/senhor.png')
            }
        } else if ( fsex[1].checked){
            genero = 'Mulher'
            if ( idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/crianca1.png')
            } else if (idade < 21){
                img.setAttribute('src', 'img/jovem1.png')
            } else if (idade < 50){
                img.setAttribute('src', 'img/adulto1.png')
            }else{
                img.setAttribute('src', 'img/senhora.png')
            }
        }

        res.innerHTML = `${genero} com ${idade} anos: `
        res.append(img)
    }  


}