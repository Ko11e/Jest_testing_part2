let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    turnNumber: 0,
    choices: ["button1", "button2", "button3", "button4"]
}

function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    for (let circle of document.getElementsByClassName("circle")) {
        if (circle.getAttribute("data-listener") !== "true") {
            circle.addEventListener("click", (e) => {
                let move = e.target.getAttribute("id");
                lightsOn(move);
                game.playerMoves.push(move);
                //playerTurn();
            });
            circle.setAttribute("data-listener", "true");
        }
    }
    showScore();
    addTurn();
}

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[Math.floor(Math.random() * 4)]);
    showTurns();
}

const showScore = () => document.getElementById('score').innerText = game.score;

function lightsOn (cric) {
    document.getElementById(cric).classList.add('light');
    setTimeout(function () {
        document.getElementById(cric).classList.remove('light');
    }, 400);
}

function showTurns() {
    game.turnNumber = 0;
    let turns = setInterval(function () {
       lightsOn(game.currentGame[game.turnNumber]);
       game.turnNumber ++;
       if (game.turnNumber >= game.currentGame.lenght) {
        clearInterval(turns);
       }
    }, 800);
}

module.exports = { game, newGame, showScore, addTurn, lightsOn, showTurns};