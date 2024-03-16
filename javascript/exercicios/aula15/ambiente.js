let num = [5, 9, 8, 2, 3]

console.log(`Os valores do meu Array são ${num}`)
num.push(1)
console.log(`Se eu colocar o valor 1 dentro do meu Array ele fica ${num}`)
console.log(`Em ordem crescente ele fica ${num.sort()}`)
console.log(`Minha Array tem ${num.length} posições`)

let val = 9;
let pos = num.indexOf(val)

if(pos != -1){
    console.log(`O valor ${val} está na posição ${pos}`)
}else{
    console.log('O valor não foi encontrado')
}
