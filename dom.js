// Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:
const container = document.querySelector("#container");

// a <p> with red text that says “Hey I’m red!”
const p = document.createElement("p")
p.textContent = "Hey I'm red!"
p.style.cssText = "color: red;"
container.appendChild(p)

// an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement("h3")
h3.textContent = "I'm a blue h3!"
h3.style.cssText = "color: blue"
container.appendChild(h3)

// a <div> with a black border and pink background color with the following elements inside of it: 
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
const div = document.createElement("div")
div.style.border = "2px solid black"
div.style.backgroundColor = "pink"
const h1 = document.createElement("h1")
h1.textContent = "I'm a div"
const p1 = document.createElement("p")
p1.textContent = "ME TOO!"
div.appendChild(h1)
div.appendChild(p1)
container.appendChild(div)

function alertFunction() {
    alert("Hello World!")
}

const btn2 = document.querySelector("#btn2")
btn2.onclick = alertFunction

const btn3 = document.querySelector("#btn3")
btn3.addEventListener("click", alertFunction)