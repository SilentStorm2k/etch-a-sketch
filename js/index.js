const size = 16;
const inputSize = document.querySelector("#size");
const resetButton = document.querySelector("#reset");
const download = document.querySelector("#download");
const sketchBoard = document.querySelector(".sketch-container");
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ff3333', '#ffff00', '#ff6600'];

resetButton.addEventListener("click", reset)

function reset (event) {
    while (sketchBoard.firstChild) {
        sketchBoard.removeChild(sketchBoard.lastChild);
    }
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            addPixel();
        }
    }
    return
}

function addPixel() {
    const newPixel = document.createElement('div');
    newPixel.style.width = (24)/(size) + "rem";
    newPixel.style.height = (24)/(size) + "rem";
    newPixel.style.backgroundColor = "white";
    newPixel.style.border = "none";
    // newPixel.
    newPixel.addEventListener("hover", changeColor);
    sketchBoard.appendChild(newPixel);
    return
}

function changeColor(event) {
    const randColor = Math.floor(Math.random()*colors.length);
    // pixel.style.backgroundColor = colors[randColor];
}