const { Chess } = require('chess.js')
const rl = require('readline')

// Cria um novo jogo de xadrez
const game = new Chess()

// Função para imprimir o tabuleiro
function printBoard() {
    console.log(game.ascii())
}

// Função para processar o movimento do jogador
function makeMove(move) {
    try {
        game.move(move)
        console.log('Movimento válido, tabuleiro atual:')
    } catch (error) {
        console.error('Erro ao processar movimento:', error.message)
    }
}

// Exemplo de loop simples para entrada do jogador
const readline = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

function gameLoop() {
    printBoard()
    readline.question('Digite seu movimento (ex: e2-e4): ', (move) => {
        makeMove(move)
        gameLoop() // Chamada recursiva para continuar o jogo
    })
}

// Iniciar o loop do jogo
gameLoop()
