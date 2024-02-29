# Adivinhe o Número Secreto

![Screenshot da página](img/screenshot.png?raw=true "Screenshot da página")

## Sobre o Projeto

O jogo "Adivinhe o Número Secreto" é uma aplicação web interativa onde o usuário tenta adivinhar um número secreto gerado aleatoriamente pelo jogo dentro de um intervalo definido. Este projeto foi desenvolvido como parte de um curso de lógica de programação do projeto ONE (oferecido pela Oracle e pela Alura), demonstrando a aplicação prática de HTML, CSS e JavaScript para criar um jogo divertido e interativo.

## Características

- **Interface Amigável**: O jogo apresenta uma interface visualmente atraente e fácil de usar, garantindo uma experiência de usuário agradável.
  Responsividade: Projetado para ser responsivo, o jogo se ajusta a diferentes tamanhos de tela, permitindo que os usuários joguem em dispositivos móveis e desktops.
- **Feedback de Voz**: Utiliza a biblioteca responsiveVoice para fornecer feedback de voz, melhorando a acessibilidade para usuários com deficiências visuais.
- **Algoritmo Estratégico**: Implementa um algoritmo recursivo como uma função opcional para demonstrar uma estratégia eficaz de adivinhação, incentivando o pensamento analítico.

### Mudanças em Relação ao Apresentado no Curso

Durante o desenvolvimento deste projeto, tomei a decisão de não seguir integralmente as instruções do curso em relação a algumas funcionalidades específicas. Abaixo, detalho as mudanças que implementei e as razões por trás dessas decisões.

#### Manutenção da Aleatoriedade

- **Decisão**: Optei por não implementar a funcionalidade que evitaria a repetição de números já sorteados durante o jogo.
- **Razão**: Acredito que a verdadeira essência de um jogo de adivinhação reside na sua imprevisibilidade e na pureza da aleatoriedade. Evitar números repetidos poderia, de certa forma, diminuir a aleatoriedade do sorteio, afetando a experiência de jogo ao sugerir um padrão ou limitação que não existe na adivinhação de números aleatórios reais.

#### Introdução de um Algoritmo Estratégico

- **Decisão**: Implementei um algoritmo recursivo que oferece uma estratégia para encontrar a solução do jogo de maneira mais eficiente, demonstrando ao jogador como aplicar uma abordagem sistemática para vencer.
- **Razão**: Esta mudança teve como objetivo compensar a decisão anterior de manter uma aleatoriedade completa, introduzindo uma componente educacional ao projeto. A função não só ilustra o uso prático de conceitos como recursividade e listas em programação, mas também encoraja os jogadores a adotar uma abordagem analítica, potencialmente aumentando suas habilidades de resolução de problemas.

#### Impacto das Mudanças

Estas decisões foram tomadas com o intuito de enriquecer a experiência do usuário e agregar valor educacional ao jogo. Enquanto a manutenção da aleatoriedade total busca preservar o desafio e a excitação inerentes a jogos de adivinhação, a introdução de um algoritmo estratégico oferece aos jogadores uma nova dimensão de interação, incentivando-os a pensar criticamente e a desenvolver estratégias lógicas de adivinhação.

Acredito que essas mudanças refletem uma abordagem equilibrada, mantendo a essência lúdica do jogo ao mesmo tempo em que introduzem conceitos computacionais avançados de uma maneira acessível e envolvente. Essas decisões destacam a importância de adaptar e personalizar projetos de aprendizagem para refletir não apenas os objetivos educacionais, mas também para incorporar uma perspectiva pessoal que enriquece o projeto, tornando-o único.

## Como Jogar

1. **Definir o Intervalo**: Ao iniciar, o usuário pode definir o limite máximo para o número secreto.
2. **Adivinhar o Número**: O usuário insere um palpite sobre qual é o número secreto.
3. **Feedback**: O jogo fornece feedback imediato, indicando se o palpite é alto, baixo ou correto.
4. **Tentativas Limitadas**: O número de tentativas é contado, e o jogo termina quando o usuário adivinha corretamente o número secreto.
5. **Demonstrar Solução**: A qualquer momento, o usuário pode acionar a função que demonstra a solução, mostrando um método estratégico para adivinhar o número secreto.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Biblioteca `responsiveVoice.js` para feedback de voz

## Instalação

Não é necessário instalar nenhum software adicional para jogar. O jogo pode ser acessado diretamente através de um navegador web, abrindo o arquivo `index.html`.

## Contribuições

Contribuições são sempre bem-vindas! Se você tem alguma sugestão para melhorar o jogo, sinta-se à vontade para criar um pull request ou abrir uma issue.

---

Desfrute do jogo e explore as estratégias para encontrar o número secreto!
