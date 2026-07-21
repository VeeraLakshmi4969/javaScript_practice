// =========================
// Game Variables
// =========================

let inputDir = { x: 0, y: 0 };

const moveSound = new Audio("move.wav");
const foodSound = new Audio("food.wav");
const gameOverSound = new Audio("gameOver.mp3");

let speed = 8;
let lastPaintTime = 0;

let snakeArr = [
    { x: 13, y: 15 }
];

let food = { x: 6, y: 7 };

let score = 0;

// =========================
// HTML Elements
// =========================

const playArea = document.getElementById("playArea");
const scoreBox = document.getElementById("scoreBox");
const highScoreBox = document.getElementById("highScoreBox");

// =========================
// High Score
// =========================

let highScore = localStorage.getItem("highScore");

if (highScore == null) {
    highScore = 0;
    localStorage.setItem("highScore", highScore);
} else {
    highScore = Number(highScore);
}

scoreBox.innerHTML = "Score : 0";
highScoreBox.innerHTML = "High Score : " + highScore;

// =========================
// Main Game Loop
// =========================

function main(ctime) {

    window.requestAnimationFrame(main);

    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }

    lastPaintTime = ctime;

    gameEngine();
}

window.requestAnimationFrame(main);

// =========================
// Collision
// =========================

function isCollide(snake) {

    // Self Collision
    for (let i = 1; i < snake.length; i++) {

        if (
            snake[i].x === snake[0].x &&
            snake[i].y === snake[0].y
        ) {
            return true;
        }
    }

    // Wall Collision
    if (
        snake[0].x <= 0 ||
        snake[0].x >= 19 ||
        snake[0].y <= 0 ||
        snake[0].y >= 19
    ) {
        return true;
    }

    return false;
}

// =========================
// Game Engine
// =========================

function gameEngine() {

    // Game Over

    if (isCollide(snakeArr)) {

        gameOverSound.play();

        alert("Game Over! Press OK to restart.");

        inputDir = { x: 0, y: 0 };

        snakeArr = [
            { x: 13, y: 15 }
        ];

        score = 0;

        scoreBox.innerHTML = "Score : 0";
    }

    // Eat Food

    if (
        snakeArr[0].x === food.x &&
        snakeArr[0].y === food.y
    ) {

        foodSound.play();

        score++;

        scoreBox.innerHTML = "Score : " + score;

        if (score > highScore) {

            highScore = score;

            localStorage.setItem("highScore", highScore);

            highScoreBox.innerHTML =
                "High Score : " + highScore;
        }

        snakeArr.unshift({
            x: snakeArr[0].x + inputDir.x,
            y: snakeArr[0].y + inputDir.y
        });

        let a = 2;
        let b = 16;

        food = {
            x: Math.round(a + (b - a) * Math.random()),
            y: Math.round(a + (b - a) * Math.random())
        };
    }

    // Move Snake

    for (let i = snakeArr.length - 1; i > 0; i--) {

        snakeArr[i] = { ...snakeArr[i - 1] };

    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    // Draw Game

    playArea.innerHTML = "";

    snakeArr.forEach((e, index) => {

        let snakeElement = document.createElement("div");

        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if (index === 0) {
            snakeElement.classList.add("head");
        } else {
            snakeElement.classList.add("snake");
        }

        playArea.appendChild(snakeElement);
    });

    let foodElement = document.createElement("div");

    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;

    foodElement.classList.add("food");

    playArea.appendChild(foodElement);
}

// =========================
// Controls
// =========================

window.addEventListener("keydown", (e) => {

    moveSound.play();

    switch (e.key) {

        case "ArrowUp":

            if (inputDir.y !== 1) {
                inputDir = {
                    x: 0,
                    y: -1
                };
            }
            break;

        case "ArrowDown":

            if (inputDir.y !== -1) {
                inputDir = {
                    x: 0,
                    y: 1
                };
            }
            break;

        case "ArrowLeft":

            if (inputDir.x !== 1) {
                inputDir = {
                    x: -1,
                    y: 0
                };
            }
            break;

        case "ArrowRight":

            if (inputDir.x !== -1) {
                inputDir = {
                    x: 1,
                    y: 0
                };
            }
            break;
    }

});