function contar(){
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');
    var res = document.getElementById('res');
    var msg = '';

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){

        res.innerHTML = '<p>Impossivel Contar</p>';

    }else{

        if(Number(passo.value) <= 0){
            window.alert('[ERRO] Passo invalido! Considere Passo 1');
            passo.value = 1;
        }

        if(Number(inicio.value) <= Number(fim.value)){
            for(let i = Number(inicio.value); i <= Number(fim.value); i+= Number(passo.value)){
                msg += String(i);
                msg += ' &#x1F449 '
            }
        }else{
            for(let i = Number(inicio.value); i >= Number(fim.value); i-= Number(passo.value)){
                msg += String(i);
                msg += ' &#x1F449  '
            }
        }
        msg+= ' &#x1F3C1'

        res.innerHTML = '<p>Contando: </p>';
        res.innerHTML += `<p>${msg}</p>`;
    }
}