alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 0;

while (numeroSecreto != chute) {
  tentativas++;
  chute = prompt('Escolha um número entre 1 e 10');
  console.log(`Número secreto: ${numeroSecreto}`);
  console.log(`Chute: ${chute}`);
  console.log(`Tentativas: ${tentativas}`);
  if (numeroSecreto > chute){
    alert(`O número secreto é maior que ${chute}.`);
  } else if (numeroSecreto < chute) {
    alert(`O número secreto é menor que ${chute}.`)
  }
}

alert(`Parabéns! Você descobriu o número secreto '${numeroSecreto}' com ${tentativas} tentativa(s).`);

