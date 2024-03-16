function fatorar(n){//Recurcividade
    if(n==1){
        return 1
    }else{
        return n *= fatorar(n-1)
    }
}

console.log(fatorar(5))

let val = ['1', '2', '3']

if(val == undefined){console.log('foi')}