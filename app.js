alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;

while (numeroSecreto != chute) {
  chute = prompt('Escolha um número entre 1 e 10');
  console.log(`Número secreto: ${numeroSecreto}`);
  console.log(`Chute: ${chute}`);
}

alert(`Parabéns! Você descobriu o número secreto (${numeroSecreto}).`);

