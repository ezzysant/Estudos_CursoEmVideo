//Função Recursiva

function fatorar(n){//Ela é declarada
    if(n <= 1){
        return 1
    }
    return n * fatorar( n - 1)//E chamada dentro de si mesma
}

console.log("Declarando uma função: " + fatorar(5));

var fatorarNum = function (n){//Variável recebe o valor de uma função anonima
    return n < 2 ? 1 : n * fatorarNum(n-1);//A expressão de função é chamada dentro de si
    //Operadores lógicos
}

console.log("Em uma expressão de função (funçao anonima): " + fatorarNum(5))

var fatNum = function fac(n){//Variável recebe o valor de uma função nomeada
    return n < 2 ? 1 : n * fac(n-1);//A função é chamada dentro de si
    //Operadores lógicos
}

console.log("Em uma expressão de função (função nomeada): " + fatNum(5))