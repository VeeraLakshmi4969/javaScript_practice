// Game constants and variables
let direction = {x: 0, y:0}


const moveSound = new Audio("move.wav");
const foodSound = new Audio("food.wav"); 

let speed = 5;
let lastPaintTime=0;
let snakeArr = [{x:14, y:15}];
food = {x: 6, y:7}


// Game Functions
function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if ((ctime-lastPaintTime)/1000  < 1/speed){
        return;

    }
    lastPaintTime = ctime;
    gameEngine();
}

function gameEngine(){
    // Part 1

    // Part 2 --> Display / Render Snake and food

    // Display Snake
    playArea.innerHTML = "";
    snakeArr.forEach((e,index)=>
    {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
    
if(index == 0){
    snakeElement.classList.add('head')
}
else{
    snakeElement.classList.add('snake');

}
playArea.appendChild(snakeElement);
});

// Display Food

foodElement = document.createElement('div')
foodElement.style.gridRowStart = food.y;
foodElement.style.gridColumnStart = food.x;
foodElement.classList.add('head');
playArea.appendChild(foodElement);
}
// Main logic behind running the game
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    switch(e.key){
        case "ArrowUp":
            console.log("Arrow Up")
            break;
        case "ArrowDown":
            console.log("Arrow Down")
            break;
        case "ArrowLeft":
            console.log("Arrow Left")
            break;
        case "ArrowRight":
            console.log("Arrow Right")
            break;
        default:
            break;
    }
})