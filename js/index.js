const size = 16;
const inputSize = document.querySelector("#size");
const resetButton = document.querySelector("#reset");
const download = document.querySelector("#download");
const sketchBoard = document.querySelector(".sketch-container");
let brightness = 1, dimFactor = 0.1;

resetButton.addEventListener("mouseover", reset);

// calling reset to initialize an empty sketch board
reset();

function reset (event) {
    while (sketchBoard.firstChild) {
        sketchBoard.removeChild(sketchBoard.lastChild);
    }
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            addPixel();
        }
    }
}

function addPixel() {
    const newPixel = document.createElement('div');
    newPixel.style.width = (24)/(size) + "rem";
    newPixel.style.height = (24)/(size) + "rem";
    newPixel.style.backgroundColor = "white";
    newPixel.style.border = "none";
    newPixel.addEventListener("mouseover", changeColor);
    sketchBoard.appendChild(newPixel);
}

function changeColor(event) {
    brightness -= dimFactor;
    const currentPixel = event.target;
    const randomColor = "rgba(" + brightness*getRandom(256) + "," + brightness*getRandom(256) + "," + brightness*getRandom(256) + ")";
    currentPixel.style.backgroundColor = randomColor;
    currentPixel.style.brightness = brightness;
    event.stopPropagation();
    currentPixel.removeEventListener("mouseover", changeColor);
}

function getRandom (max) {
    return Math.round(Math.random()*max);
}