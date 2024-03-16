
function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');

    
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique suas informações')
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'imagem')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade < 12){
                img.setAttribute('src', 'imagens/childBoy.jpg');
            }else if(idade < 21){
                img.setAttribute('src', 'imagens/yungBoy.jpg');
            }else if(idade < 51){
                img.setAttribute('src', 'imagens/adultMen.jpg');
            }else{
                img.setAttribute('src', 'imagens/oldMen.jpg');
            }
        }else{
            genero = 'Mulher'
            if(idade < 12){
                img.setAttribute('src', 'imagens/childGirl.jpg');
            }else if(idade < 21){
                img.setAttribute('src', 'imagens/yungGirl.jpg')
            }else if(idade < 51){
                img.setAttribute('src', 'imagens/adultWomen.jpg')
            }else{
                img.setAttribute('src', 'imagens/oldWomen.jpg')
            }
        }
        
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`;
        res.appendChild(img);

    }
    
}
