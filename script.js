/* Create etch a sketch grid */
const GRIDCONTAINER = document.createElement(`div`);
document.body.append(GRIDCONTAINER);
GRIDCONTAINER.classList.add(`grid-container`);

let gridDivObject = [];
for (i = 1; i <= 256; ++i) {
    gridDivObject[i] = document.createElement(`div`);
    gridDivObject[i].classList.add(`grid-part-` + i);
    GRIDCONTAINER.appendChild(gridDivObject[i]);
}

/* Add class to grid parts when hovered over */
let gridParts = document.querySelectorAll(`.grid-container > div`);
gridParts.forEach(gridPart => gridPart.addEventListener('mouseenter', function () {
    gridPart.classList.add(`filled`);
}));