import {update as updateSnake, draw as drawSnake, SNAKE_SPEED} from "./snake.js"
import {update as updateFood, draw as drawFood} from "./food.js"

let lastLoopTime = 0
const game = document.getElementById("game")

// GAME LOOP
function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastLoop = (currentTime - lastLoopTime) / 1000
    
    // Wait snake speed cooldown
    if(secondsSinceLastLoop < 1 / SNAKE_SPEED) return 
    
    lastLoopTime = currentTime
    update()
    draw()
}

// UPDATE GAME
function update() {
    updateSnake()
    updateFood()
}

// DRAW GAME
function draw() {
    game.innerHTML = ''
    drawSnake(game)
    drawFood(game)
}

window.requestAnimationFrame(main)
