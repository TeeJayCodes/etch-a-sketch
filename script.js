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
    fillGrid();
}

/* Fill grid parts when hovered over */
function fillGrid() {
    let gridParts = document.querySelectorAll(`.grid-container > div`);
    gridParts.forEach(gridPart => gridPart.addEventListener('mouseenter', function () {
    gridPart.classList.add(`filled`);
    }));
}

/* Insert button at top of page that prompts to choose number of squares per side */
let promptSquaresPerSide = document.createElement(`button`);
promptSquaresPerSide.textContent = `Click to choose number of squares per side`;
promptSquaresPerSide.addEventListener(`click`, function askSqauresPerSide() {
    let promptSquaresPerSideInput = prompt("How many sqaures per side? Max is 100");
    if (promptSquaresPerSideInput > 100) {
        alert("Sorry! The max is 100.");
        askSqauresPerSide();
    } else {
        createGrid(promptSquaresPerSideInput);
    }
});
document.body.insertBefore(promptSquaresPerSide, GRIDCONTAINER);