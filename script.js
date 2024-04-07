/* Create etch-a-sketch grid container */
const GRIDCONTAINER = document.createElement(`div`);
GRIDCONTAINER.classList.add(`grid-container`);
document.body.append(GRIDCONTAINER);

/* Create etch-a-sketch grid squares */
function createGrid(numOfSquaresPerSide) {
    let gridDivObject = [];
    GRIDCONTAINER.replaceChildren();
    for (i = 1; i <= (numOfSquaresPerSide * numOfSquaresPerSide); ++i) {
        gridDivObject[i] = document.createElement(`div`);
        gridDivObject[i].classList.add(`grid-part-` + i);
        gridDivObject[i].style.setProperty(`width`, `calc((600px / ${numOfSquaresPerSide}) - 4px`);
        gridDivObject[i].style.setProperty(`height`, `calc((600px / ${numOfSquaresPerSide}) - 4px`);
        GRIDCONTAINER.appendChild(gridDivObject[i]);
    }
}

/* Insert button at top of page that prompts to choose number of squares per side */
let promptSquaresPerSide = document.createElement(`button`);
promptSquaresPerSide.textContent = `Click to choose number of squares per side`;
document.body.insertBefore(promptSquaresPerSide, GRIDCONTAINER);
promptSquaresPerSide.addEventListener(`click`, function askSqauresPerSide() {
    let promptSquaresPerSideInput = prompt("How many sqaures per side? Max is 100");
    if (promptSquaresPerSideInput > 100) {
        alert("Sorry! The max is 100.");
        askSqauresPerSide();
    } else {
        createGrid(promptSquaresPerSideInput);
        fillGridWithStandardColor();
    }
});

function fillGridWithStandardColor() {
    let gridParts = document.querySelectorAll(`.grid-container > div`);
    gridParts.forEach(gridPart => gridPart.addEventListener('mouseenter', function () {
    gridPart.style.backgroundColor = `rgb(0, 0, 0)`;
    gridPart.style.opacity = Number(gridPart.style.opacity) + .1;
    gridPart.classList.add(`filled`);
    }));
}

/* Insert an additional button to select the random color feature when clicked */

let randomColorsButton = document.createElement(`button`);
randomColorsButton.textContent = `Draw with random colors`;
document.body.insertBefore(randomColorsButton, GRIDCONTAINER);
randomColorsButton.addEventListener(`click`, fillGridWithRandomColor);

function fillGridWithRandomColor() { 
    let gridParts = document.querySelectorAll(`.grid-container > div`);
    gridParts.forEach(gridPart => gridPart.addEventListener('mouseenter', function () {
    gridPart.style.backgroundColor = rgbValue();
    gridPart.classList.add(`filled`);
    }));
}

/* Get Random RGB value */

function rgbValue() {
    let first = Math.floor(Math.random() * 256);
    let second = Math.floor(Math.random() * 256);
    let third = Math.floor(Math.random() * 256);
    let rgbValue = `rgb(${first}, ${second}, ${third})`;
    return rgbValue;
}