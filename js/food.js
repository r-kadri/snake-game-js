import { onSnakeHead, expandSnake } from "./snake.js";

let food = { x: 11, y: 11 };

export function update() {
  if (onSnakeHead(food)) {
    expandSnake();
    let x = getRandomInt(21) + 1;
    let y = getRandomInt(21) + 1;
    food = { x, y };
  }
}

export function draw(game) {
  const f = document.createElement("div");
  f.style.gridRowStart = food.y;
  f.style.gridColumnStart = food.x;
  f.classList.add("food");
  game.appendChild(f);
}

// A number from 1 to max included
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
