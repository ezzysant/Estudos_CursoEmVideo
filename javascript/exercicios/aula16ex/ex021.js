let amigo = {
    nome:'Ezequiel',
    peso:60,
    engordou(p=0){
        console.log('Engordou')
        this.peso += p
    }
}

amigo.engordou(2)

console.log(`Meu nome é ${amigo.nome} e peso ${amigo.peso} Kg`)