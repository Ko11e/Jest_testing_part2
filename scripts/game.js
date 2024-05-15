let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"]
}

function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    showScore();
    addTurn();
    
}

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[Math.floor(Math.random() * 4)]);
    // ShowTurns();
}

const showScore = () => document.getElementById('score').innerText = game.score;

function lightsOn (cric) {
    document.getElementById(cric).classList.add('light');
    setTimeout(() => {
        document.getElementById(cric).classList.remove('light');
    }, 400);
}

module.exports = { game, newGame, showScore, addTurn, lightsOn};