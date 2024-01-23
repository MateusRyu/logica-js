const chute = document.getElementById("chute");
const mensagem = document.getElementById("mensagem");
const dica = document.getElementById("dica");
const score = document.getElementById("tentativas");
const chutar = document.getElementById("chutar");
const reiniciar = document.getElementById("reiniciar");

let numeroMaximo;
let numeroSecreto;
let tentativas;

try {
    responsiveVoice.setDefaultVoice("Brazilian Portuguese Female");
} catch (error) {
    console.error(error);
} 

function exibeTexto(texto, elemento) {
    elemento.innerText = texto;
    try {
        responsiveVoice.speak(texto);
    } catch (error) {
        console.error(error);
    }
}

function verificarChute() {
    tentativas++;
    score.value = tentativas;
    if (numeroSecreto == chute.value) {
        exibeVitoria();
    } else if (numeroSecreto > chute.value){
        exibeTexto(`O número secreto é maior que ${chute.value}.`, dica);
    } else if (numeroSecreto < chute.value) {
        exibeTexto(`O número secreto é menor que ${chute.value}.`, dica);
    }
}

function reiniciarJogo() {
    numeroMaximo = 100;
    numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1;
    tentativas = 0;
    chutar.removeAttribute('disabled');
    reiniciar.setAttribute('disabled', true);
    exibeTexto(`Escolha um número e entre 1 a ${numeroMaximo}:`, mensagem);
}

function exibeVitoria() {
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    dica.innerText = "";
    chutar.setAttribute('disabled', true);
    reiniciar.removeAttribute('disabled');
    exibeTexto(`Parabéns! Você descobriu o número secreto '${numeroSecreto}' com ${tentativas} ${palavraTentativas}.`, dica);
}

reiniciarJogo();
try {
    responsiveVoice.speak("Bem-vindo ao jogo: Adivinhe o número secreto!");
} catch (error) {
    console.error(error);
}
