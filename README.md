# Chess Project - Jogo de Xadrez no Terminal

![Badge](https://img.shields.io/badge/language-JavaScript-yellow)
![Badge](https://img.shields.io/badge/platform-Node.js-green)
![Badge](https://img.shields.io/badge/license-MIT-blue)

## 📖 Sobre

**Chess Project** é uma implementação simples de um jogo de xadrez que roda diretamente no terminal, utilizando Node.js. O projeto exibe um tabuleiro em formato ASCII, permite que dois jogadores façam movimentos alternadamente e valida cada jogada de acordo com as regras do xadrez.

O objetivo deste projeto é oferecer uma experiência de xadrez minimalista e funcional para desenvolvedores e entusiastas de jogos de terminal.

## ✨ Funcionalidades

- **Interface de Linha de Comando:** Jogue xadrez sem sair do seu terminal.
- **Tabuleiro ASCII Colorido:** O tabuleiro é renderizado em texto, com as peças pretas destacadas em amarelo para melhor visualização.
- **Validação de Movimentos:** O sistema não permite jogadas ilegais, informando o jogador caso um movimento seja inválido.
- **Notação Algébrica:** Os movimentos são feitos utilizando a notação padrão de coordenadas (ex: `e2-e4`).
- **Histórico de Jogadas:** O histórico de todos os movimentos é exibido após cada jogada.
- **Detecção de Fim de Jogo:** O jogo detecta e anuncia condições de xeque-mate e fim de partida.

## 🛠️ Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)**: Ambiente de execução do JavaScript no lado do servidor.
- **[chess.js](https://github.com/jhlywa/chess.js)**: Uma biblioteca poderosa para validação de movimentos, controle de estado do jogo e detecção de xeque-mate.
- **[Readline](https://nodejs.org/api/readline.html)**: Módulo nativo do Node.js para criar interfaces de linha de comando interativas.

## 🚀 Como Executar o Projeto

Siga os passos abaixo para executar o projeto em sua máquina local.

### Pré-requisitos

Antes de começar, você vai precisar ter o [Node.js](https://nodejs.org/) instalado.

### Instalação

1. Clone o repositório (ou apenas salve o arquivo `.js` em um diretório de sua preferência).

2. Abra o terminal no diretório do projeto e instale a dependência `chess.js`:
   ```bash
   npm install chess.js
