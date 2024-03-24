const GRIDCONTAINER = document.createElement(`div`);
document.body.append(GRIDCONTAINER);
GRIDCONTAINER.classList.add(`grid-container`);

let gridDivObject = [];
for (i = 1; i <= 256; ++i) {
    gridDivObject[i] = document.createElement(`div`);
    gridDivObject[i].classList.add(`grid-part-` + i);
    GRIDCONTAINER.appendChild(gridDivObject[i]);
}

