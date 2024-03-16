let num = document.getElementById('fnum')
let list = document.getElementById('flist')
let res = document.getElementById('res')
let val = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function isList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumber(num.value) && !isList(num.value, val)){
        val.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor invalido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(val.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let tot = val.length
        let maior = val[0]
        let menor = val[0]
        let soma = 0
        let media = 0

        for(let pos in val){
            soma += val[pos]
            if(val[pos] > maior){
                maior = val[pos]
            }
            if(val[pos] < menor){
                menor = val[pos]
            }
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digítados é ${media}</p>`
    }
}