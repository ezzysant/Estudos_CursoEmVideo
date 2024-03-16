var numA = []

function addNum(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let res = document.getElementById('res')
    let n = Number(num.value)

    res.innerHTML = ''

    if(num.value.length == 0){
        window.alert('[Erro] Coloque um número!')
    }else{
        let retrN = numA.indexOf(n);

        if(retrN != -1){
            window.alert('Esse Numero já foi adicionado')
        }else{
            let item = document.createElement('option')

            numA.push(n)
            item.text = `Valor ${n} adicionado`
            tab.appendChild(item)
            num.value = null
        }
    }
}

function resNum(){
    let res = document.getElementById('res')

    if(numA.length == 0){
        window.alert('Adicione valores')
    }else{
        numA.sort()
        let comp = numA.length
        let primN = numA[0]
        let ultmN = numA[comp - 1]
        let soma = 0;
        let media = 0;

        for(let pos in numA){
            soma += numA[pos]
        }

        media = soma / comp

        res.innerHTML = `
        <p>Ao todo, temos ${comp} números cadastrados.</p>
        <p>O maior valor informado foi ${ultmN}.</p>
        <p>O menor valor informado foi ${primN}.</p>
        <p>Somando todos os valores, temos ${soma}</p>
        <p>A média dos valores digítados é ${media}</p>`
    }
}