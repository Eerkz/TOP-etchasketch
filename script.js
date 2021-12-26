const gridContainer = document.querySelector('.grid-container')
const clearBtn = document.getElementById('Clear')
const blackBtn = document.getElementById('Black')
const rainbowBtn = document.getElementById('Rainbow')
const eraserBtn = document.getElementById('Eraser')

//default color
let currentColor = "black"

//slider
const slider = document.getElementById("myRange")
const output = document.getElementById("rangeText")
slider.oninput = function() {
  output.innerHTML = (this.value + " x " + this.value)
}


//making of the grid
function makeGrid(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows)
    gridContainer.style.setProperty('--grid-cols', cols)
    for (i = 0; i < (rows * cols); i++) {
      let gridCell = document.createElement("div");
      gridContainer.appendChild(gridCell).className = "grid-cell"
    };
};

//change mode 
function newMode(color){
    currentColor = color
}

//different coloring modes
function diffModes(event) {
    switch (currentColor) {
      case "rainbow":
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1))
        const r = randomBetween(0, 255)
        const g = randomBetween(0, 255)
        const b = randomBetween(0, 255)
        event.target.style.backgroundColor = `rgb(${r},${g},${b})`
        break;
      case "black":
        event.target.style.backgroundColor = "black"
        break
      case "eraser":
        event.target.style.backgroundColor = "white"
        break
    }
  }

//trigger painting
gridContainer.addEventListener('mouseover', function(event){
    if(event.target.matches('.grid-cell')){
        diffModes(event)
    }
})

//event listeners  
blackBtn.addEventListener('click', ()=> {newMode("black")})
rainbowBtn.addEventListener('click', ()=> {newMode("rainbow")})
eraserBtn.addEventListener('click',()=> {newMode('eraser')})
slider.addEventListener('mouseup', ()=> {
  gridContainer.innerHTML =""
  makeGrid(slider.value,slider.value)
})
clearBtn.addEventListener('click', ()=> {
  gridContainer.innerHTML =""
  makeGrid(slider.value,slider.value)
})

//default grid
window.onload(
    makeGrid(10,10)
)

