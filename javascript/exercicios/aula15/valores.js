let val = [8, 1, 9, 6, 3, 5, 4]

/* Maneira tradicional de ver o Valor de cada Elemento
for(let pos=0; pos<val.length; pos++){
    console.log(`A posição ${pos} tem valor ${val[pos]}`)
}
*/

//Maneira mas recente e simplificada
for(let pos in val){
    console.log(`A posição ${pos} tem valor ${val[pos]}`)
}

