import { onSnakeHead, expandSnake } from "./snake.js";

let food = { x: 11, y: 11 };

export function update() {
  if (onSnakeHead(food)) {
    expandSnake();
    food = { x: 20, y: 10 };
  }
}

export function draw(game) {
  const f = document.createElement("div");
  f.style.gridRowStart = food.y;
  f.style.gridColumnStart = food.x;
  f.classList.add("food");
  game.appendChild(f);
}
