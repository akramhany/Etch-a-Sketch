const container = document.getElementById('container');

function getRandomColor() {
    let redValue = Math.floor(Math.random() * 256);
    let greenValue = Math.floor(Math.random() * 256);
    let blueValue = Math.floor(Math.random() * 256);
    return `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}

function makeGrid(numOfRows, numOfColumns) {
    for (let i = 0; i < numOfRows; i++) {
        const exisitngGridRows = container.style.getPropertyValue('grid-template-rows');
        container.style.gridTemplateRows = exisitngGridRows + ' ' + '1fr';
    }

    for (let i = 0; i < numOfColumns; i++) {
        const exisitngGridColumns = container.style.getPropertyValue('grid-template-columns');
        container.style.gridTemplateColumns = exisitngGridColumns + ' ' + '1fr';
    }

    for (let i = 0; i < numOfColumns * numOfRows; i++) {
        const newCell = document.createElement('div');
        container.appendChild(newCell);
        newCell.classList.add(`cell`);
    }

    const cell = document.querySelectorAll('.cell');
    cell.forEach((singleCell) => {
        singleCell.style.cssText = "border: 1px solid; color: #2F3C7E;"
    })

    cell.forEach((eachCell) => {
        eachCell.addEventListener('mouseover', () => {
            eachCell.style.backgroundColor = getRandomColor();
        })
    })
}

function eraseGrid() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.remove();
    })

    container.removeAttribute('style');
}

makeGrid(16, 16);

const gridSize = document.querySelector(".gridSize");
gridSize.addEventListener('click', (event) => {

    eraseGrid();
    let size = prompt("what size do you want the grid to be ?");
    while (isNaN(size) || size < 0 || size > 100) {
        size = prompt("enter a positive size number below 100");
    }
    makeGrid(size, size);
})

const eraseButton = document.querySelector(".erase");
eraseButton.addEventListener('click', () => {
    const cell = document.querySelectorAll('.cell');
    cell.forEach((eachCell) => {
        eachCell.style.backgroundColor = '#FBEAEB';
    })
})