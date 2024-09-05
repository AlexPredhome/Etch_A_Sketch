// script.js
const gridContainer = document.getElementById('grid');
const resetButton = document.getElementById('reset');
const promptButton = document.getElementById('prompt');

//Set grid based on size request
function createGrid(size) {
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black'; // Change color on hover
        });
        gridContainer.appendChild(cell);
    }
}

// Reset grid to blank state
function resetGrid() {
    let gridSize;
    gridContainer.innerHTML = ''; // Clear existing cells
    createGrid(gridSize); // Recreate grid
}
//Set grid based on prompt and create grid
function getGridSize(){
    let gridSize;
    let maxSize = 100;

    do {
        gridSize = prompt(`How many squares per side would you like? (max ${maxSize} squares)`); // You can change this for different grid sizes
      } while (gridSize > maxSize); // run until you select something within the limit of 100
     alert(`Your input: ${gridSize}`); 

    gridContainer.innerHTML = '';   
    createGrid(gridSize);
}


resetButton.addEventListener('click', resetGrid);
promptButton.addEventListener('click', getGridSize);



// Initialize grid on page load
//createGrid(gridSize);
