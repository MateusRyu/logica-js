alert('Boas vindas ao jogo do número secreto!');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1;
console.log(numeroSecreto);
let chute;
let tentativas = 0;

while (numeroSecreto != chute) {
  tentativas++;
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
  console.log(`Número secreto: ${numeroSecreto}`);
  console.log(`Chute: ${chute}`);
  console.log(`Tentativas: ${tentativas}`);
  if (numeroSecreto == chute) {
    break;
  } else if (numeroSecreto > chute){
    alert(`O número secreto é maior que ${chute}.`);
  } else if (numeroSecreto < chute) {
    alert(`O número secreto é menor que ${chute}.`)
  }
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você descobriu o número secreto '${numeroSecreto}' com ${tentativas} ${palavraTentativas}.`);


