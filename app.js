const chute = document.getElementById("chute");
const mensagem = document.getElementById("mensagem");
const dica = document.getElementById("dica");
const score = document.getElementById("tentativas");
const chutar = document.getElementById("chutar");
const reiniciar = document.getElementById("reiniciar");
const botao_demonstrar = document.getElementById('demonstrar');
const campoNumeroMaximo = document.getElementById('numeroMaximo');

const lmimiteMaximo = 999999999999999;
document.getElementById("limiteMaximo").innerText = lmimiteMaximo;

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
    if (chute.value == "") {
        exibeTexto("O campo do chute está vazio!", dica);
        return false;
    } else if (chute.value < 1 || chute.value > numeroMaximo) {
        exibeTexto(`O valor do chute deve ser entre 1 e ${numeroMaximo}!`, dica);
        chute.value  = "";
        return false;
    }
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
    chute.value = "";
}

function reiniciarJogo() {
    if (campoNumeroMaximo.value == "") {
        exibeTexto("O campo do número máximo está vazio!", dica);
        return false;
    } else if (campoNumeroMaximo.value < 1 || campoNumeroMaximo.value > lmimiteMaximo) {
        exibeTexto(`O valor do número máximo deve ser entre 2 e ${lmimiteMaximo}!`, dica);
        chute.value  = "";
        return false;
    }
    let tabela = document.querySelector('table');
    let corpo = tabela.querySelector('tbody');
    corpo.innerHTML = '';
    numeroMaximo = parseInt(campoNumeroMaximo.value, 10);
    reiniciar.innerHTML = "Reiniciar o jogo!";
    campoNumeroMaximo.setAttribute("disabled", true);
    chute.max = numeroMaximo;
    numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1;
    tentativas = 0;
    chutar.removeAttribute('disabled');
    chute.removeAttribute('disabled');
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
    chute.setAttribute("disabled", true);
    chutar.setAttribute("disabled", true);
    limiteChutes = limiteChutes ? limiteChutes : [1, numeroMaximo];
    console.log(limiteChutes)
    media = Math.floor( (limiteChutes[0] + limiteChutes[1]) / 2 );
    chute.value = media;
    verificarChute();
    if (numeroSecreto != media) {
        limiteQueVaiSerAjustado = dica.innerText.includes('maior') ? 0 : 1;
        limiteChutes[limiteQueVaiSerAjustado] = media;
        setTimeout(demonstrar, 0);
    }
}

try {
    responsiveVoice.speak("Bem-vindo ao jogo: Adivinhe o número secreto!");
} catch (error) {
    console.error(error);
}
