export const SNAKE_SPEED = 2; // In a second
const snakeBody = [
    {x: 0, y: 0}
]

export function update() {
    // MOVE SNAKE BODY EXCEPT THE HEAD
    for (let index = snakeBody.length -2; index >= 0; index--) {
        snakeBody[index+1] = snakeBody[index]
    }

    // SNAKE'S HEAD
    /*snakeBody[0].x = -1
    snakeBody[0].y = -1*/
}

export function draw(game) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        game.appendChild(snakeElement)
    })
}