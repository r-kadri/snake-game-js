const food = [
    {x: 11, y: 11}
]

export function update() {
}

export function draw(game) {
    food.forEach(segment => {
        const f = document.createElement('div')
        f.style.gridRowStart = segment.y
        f.style.gridColumnStart = segment.x
        f.classList.add('food')
        game.appendChild(f)
    })
}