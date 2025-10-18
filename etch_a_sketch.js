const container = document.querySelector("#container")

let squaresPerSide =16
let numberOfSquares = squaresPerSide * squaresPerSide

for (let i = 0; i < numberOfSquares; i++) {
    const div = document.createElement("div")
    div.classList.add("grid-item")
    div.style.flex = `0 0 calc(100% / ${squaresPerSide})`
    div.style.aspectRatio = "1 / 1"
    container.appendChild(div)
}
