const { Chess } = require('chess.js')
const rl = require('readline')

const game = new Chess()

function printBoard(){
    console.log(game.ascii())
}

printBoard()

function makeMove(move){
    try{
        game.move(move)
        console.log('Movimento feito: ')
    }catch(err){
        console.error("Erro no movimento: ", err.message)
    }
}

const readline = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

function gameLoop(){
    if(game.isGameOver()){
        console.clear()
        printBoard()
        console.log("\n",game.history())

        return console.log('\n CHECK-MATE e/ou GAME-OVER')
    }
    readline.question('\nDigite seu movimento (ex: e2-e4): ', (move)=>{
        console.clear()
        makeMove(move)
        printBoard()
        console.log("\n",game.history())

        gameLoop()
    })

}

gameLoop()