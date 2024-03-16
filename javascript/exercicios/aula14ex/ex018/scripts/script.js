function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = '<p>Impossivel Contar! Faltam Dados</p>'
    }else{
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        let msg = ''

        if(p <= 0){
            window.alert('[ERRO] Considere PASSO 1!')
            p = 1
        }

        if( i <= f){
            for( let c = i; c <= f; c += p){
                msg += `${c} \u{1F449} `
            }
        }else{
            for(let c = i; c >= f; c -= p){
                msg += `${c} \u{1F449} `
            }
        }

        msg += `\u{1F3C1}`

        res.innerHTML = '<p>Contando:</p>'
        res.innerHTML += `${msg}`
    }

}