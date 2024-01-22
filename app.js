responsiveVoice.setDefaultVoice("Brazilian Portuguese Female");

const chute = document.getElementById("chute");
const mensagem = document.getElementById("mensagem");
const dica = document.getElementById("dica");

let numeroMaximo;
let numeroSecreto;
let texto;
let tentativas;

function verificarChute() {
    tentativas++;
    if (numeroSecreto == chute.value) {
        exibeVitoria();
    } else if (numeroSecreto > chute.value){
        texto = `O número secreto é maior que ${chute.value}.`;
        dica.innerText = texto;
        responsiveVoice.speak(texto);
    } else if (numeroSecreto < chute.value) {
        texto = `O número secreto é menor que ${chute.value}.`;
        dica.innerText = texto;
        responsiveVoice.speak(texto);
    }
}

function reiniciarJogo() {
    numeroMaximo = 100;
    numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1;
    texto = `Escolha um número entre 1 a ${numeroMaximo}:`;
    mensagem.innerText = texto;
    responsiveVoice.speak(texto);
    tentativas = 0;  
}

function exibeVitoria() {
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    texto = `Parabéns! Você descobriu o número secreto '${numeroSecreto}' com ${tentativas} ${palavraTentativas}.`;
    dica.innerText = "";
    mensagem.innerText = texto;
    responsiveVoice.speak(texto);
}

responsiveVoice.speak("Bem-vindo ao jogo: Adivinhe o número secreto!");
reiniciarJogo();
