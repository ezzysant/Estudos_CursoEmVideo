function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique od Dados');
    }else{
        var idade = ano - Number(fano.value);
        var genero = '';
        var fsex = document.getElementsByName('radsex');
        var img = document.createElement('img');
        var nomeA = ''
        img.setAttribute('id', 'imagem');

        if(fsex[0].checked){
            genero = 'Homem'

            if(idade < 12){
                img.setAttribute('src', 'imagens/foto-homem-crianca.jpg');
                nomeA = 'Bolloon Boy';
            }else if( idade < 21){
                img.setAttribute('src', 'imagens/foto-homem-jovem.jpg');
                nomeA = 'Fox';
            }else if(idade < 51){
                img.setAttribute('src', 'imagens/foto-homem-adulto.jpg');
                nomeA = 'Withered Freddy';
            }else{
                img.setAttribute('src', 'imagens/foto-homem-velho.jpg');
                nomeA = 'Spring Trap';
            }
        }else{
            genero = 'Mulher'

            if(idade < 12){
                img.setAttribute('src', 'imagens/foto-mulher-crianca.jpg');
                nomeA = 'JJ';
            }else if(idade < 21){
                img.setAttribute('src', 'imagens/foto-mulher-jovem.jpg');
                nomeA = 'Toy Chica';
            }else if(idade < 51){
                img.setAttribute('src', 'imagens/foto-mulher-adulto.jpg');
                nomeA = 'Ballora';
            }else{
                img.setAttribute('src', 'imagens/foto-mulher-velho.jpg');
                nomeA = 'Withered Chica';
            }
        }

        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos`
        res.appendChild(img);
        res.innerHTML += `<p style="font-weight: bold; font-size: 1.5em;">${nomeA}</p>`;
    }
}