const inputSize = document.querySelector("#size");
const resetButton = document.querySelector("#reset");
const downloadButton = document.querySelector("#download");
const sketchBoard = document.querySelector(".sketch-container");
let brightness = 1, dimFactor = 0.1;

resetButton.addEventListener("click", reset);
inputSize.oninput = function() {
    reset(event, inputSize.value);
};

// calling reset to initialize an empty sketch board
reset();

function reset (event, size = 16) {
    if (size === 16) {
        inputSize.value = 16;
    }
    const sizeToBeDisplayed = document.createElement('h3');
    sizeToBeDisplayed.textContent = size + " x " + size;
    let elements = inputSize.parentElement.childElementCount;
    for (let i = 0; i < elements-1; i++) {
        const parent = inputSize.parentElement;
        parent.removeChild(parent.firstChild);
    }
    inputSize.parentNode.insertBefore(sizeToBeDisplayed, inputSize);
    brightness = 1;
    while (sketchBoard.firstChild) {
        sketchBoard.removeChild(sketchBoard.lastChild);
    }
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            addPixel(size);
        }
    }
}

function addPixel(size) {
    const newPixel = document.createElement('div');
    newPixel.style.width = (24)/(size) - 0.001 + "rem";
    newPixel.style.height = (24)/(size) - 0.001 + "rem";
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
    event.stopPropagation();
    currentPixel.removeEventListener("mouseover", changeColor);
}

function getRandom (max) {
    return Math.round(Math.random()*max);
}

// downloadButton.addEventListener('click', downloadSketch);

// function downloadURI (uri, name) {
//     const link = document.createElement('a');
//     link.download = name;
//     link.href = uri;
//     link.click()
// }

// function downloadSketch (event) {
//     const sketch = sketchBoard.toDataURL("images/temp.png");
// }