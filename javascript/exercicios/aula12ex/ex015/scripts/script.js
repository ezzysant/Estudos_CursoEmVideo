function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas`;

    if(hora > 6 && hora < 12){
        img.src = 'imagens/morning.png';
        document.body.style.background ='#e2cb9f';
    }else if(hora >= 12 && hora < 18){
        img.src = 'imagens/afternoon.png';
        document.body.style.background = '#b9846f';
    }else{
        img.src = 'imagens/night.png';
        document.body.style.background ='#515154';
        
    }
}