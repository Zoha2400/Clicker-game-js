var time = document.getElementById('time');
var buttonToStart = document.getElementById('start');
var number = document.getElementById('NumDisplay');


var game = document.getElementById('window');
var windowReady = document.getElementById('windowReady');
var block = document.getElementById("block");


var scoreDisplay = document.getElementById("score");
var restart = document.getElementById("restart");
var gameOver = document.getElementById('gameOver');

var validate = null;
var massRecord = [];
var colors = ["red", "green", "yellow", "black", "pink", "purple", "brown", "blue", "gray", "gold", "teal", "tomato", "aqua", "aquamarine", "violet", "crimson", "yellowgreen"]


number.value = 5;

buttonToStart.addEventListener("click", start);

function start() {
    massRecord = []

    windowReady.classList.add("hide");
    time.textContent = number.value;

    var interval = setInterval(() => {
        var num = parseFloat(time.textContent);
        if (num <= 0) {
            clearInterval(interval);
            time.style.backgroundColor = "rgb(255, 52, 52)";
            time.style.color = "white";
            endGame();

        } else {
            time.textContent = (num - 0.1).toFixed(1);
        }
    }, 100);
    fillBlock()
}

function fillBlock() {
    var boxSize = getRandom(30, 100)
    var gameSize = game.getBoundingClientRect()
    var maxTop = gameSize.height - boxSize;
    var maxLeft = gameSize.width - boxSize;

    var randomColor = randomInteger(0, 16);

    block.style.backgroundColor = colors[randomColor];
    block.style.width = block.style.height = boxSize + "px";
    block.style.top = getRandom(0, maxTop) + 'px';
    block.style.left = getRandom(0, maxLeft) + 'px';
    block.style.position = "absolute";
    block.style.cursor = 'pointer';
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

block.addEventListener("click", boxSetting);

function boxSetting() {
    var boxSize = getRandom(30, 100);
    var gameSize = game.getBoundingClientRect();
    var maxTop = gameSize.height - boxSize;
    var maxLeft = gameSize.width - boxSize;

    var randomColor = randomInteger(0, 16);

    block.style.backgroundColor = colors[randomColor];
    block.style.width = block.style.height = boxSize + "px";
    block.style.top = getRandom(0, maxTop) + 'px';
    block.style.left = getRandom(0, maxLeft) + 'px';

    massRecord.push(1);
}



function endGame() {
    scoreDisplay.textContent = massRecord.length;
    gameOver.classList.remove("hide");
    restart.classList.remove("hide");
}


restart.onclick = function() {
    gameOver.classList.add("hide");
    restart.classList.add("hide");
    time.style.backgroundColor = "white";
    time.style.color = "black";
    start();

}



function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}