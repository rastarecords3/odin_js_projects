const container = document.querySelector("#container")
const resetBtn = document.querySelector("#reset")
const resizeBtn = document.querySelector("#resize")

let squaresPerSide =16

function makeGrid(size) {
    container.innerHTML = ""
    const numberOfSquares = size * size

    for (let i = 0; i < numberOfSquares; i++) {
        const div = document.createElement("div")
        div.classList.add("grid-item")
        div.style.flex = `0 0 calc(100% / ${squaresPerSide})`
        div.style.aspectRatio = "1 / 1"
        div.style.border = "1px solid";
        div.style.boxSizing = "border-box";
        // hover behaviour
        div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 50%)`;
        })
        container.appendChild(div)
    }
}

makeGrid(squaresPerSide)

resetBtn.addEventListener("click", () => {
    document.querySelectorAll(".grid-item").forEach(div => {
        div.style.backgroundColor = "";
    })
})

resizeBtn.addEventListener("click", () => {
    let newSize = parseInt(prompt("Enter a new grid side length (1-50):"), 10)
    if (newSize > 0 && newSize <=50) {
        squaresPerSide = newSize
        makeGrid(squaresPerSide)
    } else {
        alert("Please enter a number between 1 and 50")
    }

})