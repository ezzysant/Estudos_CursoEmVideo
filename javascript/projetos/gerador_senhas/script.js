let numText = document.getElementById('inumCarc')//Número de Caracteres em Texto
let numRange = document.getElementById('inumRange')//Numero de Carácteres em Range
let chckPers = document.getElementsByName('chckPers');//Check Box Perssonalizar
let textPw = document.getElementById('itxtp')//Paragrafo para mostrar a senha gerada


let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']//Array com Números
let strm = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']//Array com Letras Minusculas
let strM = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'I', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']//Array com Letras Maiusculas
let simb = ['!', '@', '#', '$', '-', '_', '?', ':', ';']//Array com Simbolos

function numTextRange(n=0){
    if(n == 2){
        if(numText.value != numRange.value){
            numText.value = numRange.value
        }
    }else if(n == 1){
        if(numRange.value != numText.value){
        numRange.value = numText.value
        }
    }
}

function trfal_CheckBox(){//Função para verificar se uma da(s) Check Box está(ão) selecionada(s)
    
    for(let i = 0; i < chckPers.length; i++){
        if(chckPers[i].checked){
            return true
        }
    }
    return false

}

function numCaracter(){//Função para verificar se a Quantidade de caracteres que o cliente quer é valida
    if(numText.value.length != 0 && Number(numText.value) >= 8 && Number(numText.value) <= 50){
        return true
    }else{
        return false
    }
}

function selectCheckBox(){//Função que verifica quais Check Box estão selecionados
    let howmany_checkbox = [];

    for(let i = 0; i < chckPers.length; i++){
        if(chckPers[i].checked){
            howmany_checkbox.push(chckPers[i].id)
        }
    }

    return howmany_checkbox
}

function numAleatorio(n=1){//Função para criar numero aleatorio
    let numero_escolido = Math.floor(Math.random() * n)
    return numero_escolido
}


function gerarSenha(){//Função para gerar senha
    if( numCaracter() && trfal_CheckBox()){//Condição para gerar senha

        let myPassword = ''//Variavel que armazena a senha
        let hm_chbx =  selectCheckBox();//Variavel composta que armazena as Check box selecionadas
        for(let i = 0; i < Number(numText.value); i++){//Laço para gerar caracteres para senha
            let numRandom = numAleatorio(hm_chbx.length)//Variavel que gera numeros aleatorios

            switch(hm_chbx[numRandom]){//Condição multipla(switch) para verificar qual tipo de caracter deve colocar
                case 'istrm':
                    numRandom = numAleatorio(strm.length)
                    //Váriavel para criar um número aleatorio de 0 a ultimo index da Array 'str'
                    myPassword += strm[numRandom]//Adicionar(concatenar) o caracter na variavel myPassword
                    break;
                case 'istrM':
                    numRandom = numAleatorio(strM.length)
                    //Váriavel para criar um número aleatorio de 0 a ultimo index da Array 'str'
                    myPassword += strM[numRandom]//Adicionar(concatenar) o caracter na variavel myPassword
                    break;
                case'inum'://Caso caracter seja do tipo número
                    numRandom = numAleatorio(num.length)//Váriavel para criar um número aleatorio de 0 a ultimo index da Array 'num'
                    myPassword += num[numRandom]//Adicionar(concatenar) o caracter na variavel myPassword
                    break;
                case'isimb':
                    numRandom = numAleatorio(simb.length)//Váriavel para criar um número aleatorio de 0 a ultimo index da Array 'simb'
                    myPassword += simb[numRandom]
                    //Adicionar(concatenar) o caracter na variavel myPassword
                    break;
            }
        }

        textPw.value = myPassword //Colocar a sanha gerada dentro do input text

    }else{//Se não
        window.alert('[ERRO] Quantidade de 8 a 20 caracteres e marque uma das opções')//Menssagem de erro
        numText.focus()//Selecionar o input de quantidade de caracter
        chckPers[1].checked = true//Selecionar a Check Box numCheck
    }
}

function copyText(){
    textPw.select();
    textPw.setSelectionRange(0,99999)
    document.execCommand('copy')
    window.alert('Senha copiada com sucesso!')
}