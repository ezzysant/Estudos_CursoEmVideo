function gerarTabuada(){
    var txtn = document.getElementById('txtn');
    var res = document.getElementById('res')

    if(txtn.value.length == 0){
        window.alert('Coloque algum número');
    }else{
        res.innerHTML ='';
        for(var i = 1; i <= 10; i++){
            res.innerHTML += `<p>${txtn.value} x ${i} = ${Number(txtn.value) * i}</p>`
        }
    }
}