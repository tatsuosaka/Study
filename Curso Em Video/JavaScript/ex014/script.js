function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagen')
    let dtn = window.document.getElementById('dtn')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/Manhã.png'
        document.body.style.backgroundColor = 'rgb(124,171,192)'
        dtn.innerHTML = 'Bom dia'
    }else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/Tarde.png'
        document.body.style.backgroundColor = 'rgb(150,44,55)'
        dtn.innerHTML = 'Boa tarde'
    }else {
        img.src = 'imagens/Noite.png'
        document.body.style.backgroundColor = 'rgb(89,77,91)'
        dtn.innerHTML = 'Boa noite'
    }
 }

