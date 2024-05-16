let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    lastButton: "",
    turnInProgress: false,
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
                if (game.currentGame.length > 0 && !game.turnInProgress) {
                    let move = e.target.getAttribute("id");
                    game.lastButton = move;
                    lightsOn(move);
                    game.playerMoves.push(move);
                    playerTurn();
                }
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
    }, 800);
}

function showTurns() {
    game.turnInProgress = true;
    game.turnNumber = 0;
    let turns = setInterval(function () {
       lightsOn(game.currentGame[game.turnNumber]);
       game.turnNumber ++;
       if (game.turnNumber >= game.currentGame.lenght) {
        clearInterval(turns);
        game.turnInProgress = false;
       }
    }, 1600);
}

function playerTurn() {
    let i = game.playerMoves.length-1;
    if (game.currentGame[i] === game.playerMoves[i]) {
        if (game.currentGame.length === game.playerMoves.length) {
            game.score ++;
            showScore();
            addTurn();
        }
    } else {
        alert("Wrong move!");
        newGame();
    }
}

module.exports = { game, newGame, showScore, addTurn, lightsOn, showTurns, playerTurn};