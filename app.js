let listasNumerosGerados= [];
let numeroLimit = 30;
let numeroSecreto = gerarNumeroAleatorio();
let cont=0;


console.log(numeroSecreto);
exibirTextoNaTela('h1','Jogo do numero secreto');
exibirTextoNaTela('p','Escolha um numero entre 1 e 30');

function exibirTextoNaTela(tag, texto){
   let campo = document.querySelector(tag); 
   campo.innerHTML = texto;
   responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2})  // Fala o valor do h1 
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimit + 1);
    let quantidadeElementosLista = listasNumerosGerados.length

    if(quantidadeElementosLista == numeroLimit){
        listasNumerosGerados = [];
    }
    if(listasNumerosGerados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listasNumerosGerados.push(numeroEscolhido);  //coloca o numero no final da lista
        console.log(listasNumerosGerados);
        return numeroEscolhido;
    }
}

function NovoJogo(){
    limparCampo();
    numeroSecreto = gerarNumeroAleatorio();5
    exibirTextoNaTela('h1','Jogo do numero secreto');
    exibirTextoNaTela('p','Escolha um numero entre 1 e 30');
    cont=0;
    console.log(numeroSecreto);
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function limparCampo(){
    input = document.querySelector('input');
    input.value= '';
    document.getElementById('reiniciar').disabled = false;
}

function verificarChute(){
let input = document.querySelector('input').value;
if(input < numeroSecreto){
    exibirTextoNaTela('p','Numero secreto e maior');
    cont++;
}else if(input > numeroSecreto){
    exibirTextoNaTela('p','Numero secreto e menor');
    cont++
}
if(input == numeroSecreto){
    exibirTextoNaTela('h1','Acertou!');
    let palavraTentativas = cont > 1 ? 'tentativas' : 'tentativa';
    exibirTextoNaTela('p',`Parabens voce encontrou o numero secreto :) com ${cont} ${palavraTentativas}`);
    limparCampo()
}
}
