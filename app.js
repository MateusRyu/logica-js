responsiveVoice.setDefaultVoice("Brazilian Portuguese Female");

const chute = document.getElementById("chute");
const mensagem = document.getElementById("mensagem");
const dica = document.getElementById("dica");

let numeroMaximo;
let numeroSecreto;
let texto;
let tentativas;

function exibeMensagem(mensagem, elemento) {
    elemento.innerText = mensagem;
    responsiveVoice.speak(mensagem);
}

function verificarChute() {
    tentativas++;
    if (numeroSecreto == chute.value) {
        exibeVitoria();
    } else if (numeroSecreto > chute.value){
        exibeMensagem(`O número secreto é maior que ${chute.value}.`, mensagem);
    } else if (numeroSecreto < chute.value) {
        exibeMensagem(`O número secreto é menor que ${chute.value}.`, mensagem);
    }
}

function reiniciarJogo() {
    numeroMaximo = 100;
    numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1;
    exibeMensagem(`Escolha um número entre 1 a ${numeroMaximo}:`, mensagem);
    tentativas = 0;  
}

function exibeVitoria() {
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    exibeMensagem(`Parabéns! Você descobriu o número secreto '${numeroSecreto}' com ${tentativas} ${palavraTentativas}.`, mensagem);
    dica.innerText = "";
}

responsiveVoice.speak("Bem-vindo ao jogo: Adivinhe o número secreto!");
reiniciarJogo();
