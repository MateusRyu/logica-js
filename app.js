const chute = document.getElementById("chute");
const mensagem = document.getElementById("mensagem");
const dica = document.getElementById("dica");
const score = document.getElementById("tentativas");
const chutar = document.getElementById("chutar");
const reiniciar = document.getElementById("reiniciar");
const botao_demonstrar = document.getElementById('demonstrar');
const campoNumeroMaximo = document.getElementById('numeroMaximo');

let numeroMaximo;
let numeroSecreto;
let tentativas;
let limiteChutes = false;

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
    adicionarLinha(tentativas, chute.value);
    if (numeroSecreto == chute.value) {
        exibeVitoria();
    } else if (numeroSecreto > chute.value){
        exibeTexto(`O número secreto é maior que ${chute.value}.`, dica);
    } else if (numeroSecreto < chute.value) {
        exibeTexto(`O número secreto é menor que ${chute.value}.`, dica);
    }
}

function reiniciarJogo() {
    let tabela = document.querySelector('table');
    let corpo = tabela.querySelector('tbody');
    corpo.innerHTML = '';
    numeroMaximo = campoNumeroMaximo.value;
    reiniciar.innerHTML = "Reiniciar o jogo!";
    campoNumeroMaximo.setAttribute("disabled", true);
    chute.max = numeroMaximo;
    numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1;
    tentativas = 0;
    chutar.removeAttribute('disabled');
    reiniciar.setAttribute('disabled', true);
    botao_demonstrar.removeAttribute('disabled');
    exibeTexto(`Escolha um número e entre 1 a ${numeroMaximo}:`, mensagem);
}

function exibeVitoria() {
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    dica.innerText = "";
    chutar.setAttribute('disabled', true);
    reiniciar.removeAttribute('disabled');
    limiteChutes = false;
    botao_demonstrar.setAttribute('disabled',true);
    campoNumeroMaximo.removeAttribute("disabled");
    exibeTexto(`Parabéns! Você descobriu o número secreto '${numeroSecreto}' com ${tentativas} ${palavraTentativas}.`, dica);
}

function adicionarLinha(tentativa, chute) {
    let tabela = document.querySelector("table");
    let corpo = tabela.querySelector("tbody");
    let novaLinha = corpo.insertRow();
    let celulaTentativa = novaLinha.insertCell(0);
    let celulaChute = novaLinha.insertCell(1);
    celulaTentativa.innerHTML = tentativa;
    celulaChute.innerHTML = chute;
    novaLinha.classList.add("container__tabela");
}

async function demonstrar() {
    limiteChutes = limiteChutes ? limiteChutes : [1, numeroMaximo];
    media = Math.floor( (limiteChutes[0] + limiteChutes[1]) / 2 );
    chute.value = media;
    chutar.click();
    if (numeroSecreto != chute.value) {
        limiteQueVaiSerAjustado = dica.innerText.includes('maior') ? 0 : 1;
        limiteChutes[limiteQueVaiSerAjustado] = media;
        setTimeout(demonstrar, 200);
    }
}

try {
    responsiveVoice.speak("Bem-vindo ao jogo: Adivinhe o número secreto!");
} catch (error) {
    console.error(error);
}
