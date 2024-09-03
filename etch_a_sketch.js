// script.js
const gridContainer = document.getElementById('grid');
const resetButton = document.getElementById('reset');
const gridSize = 16; // You can change this for different grid sizes

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
    gridContainer.innerHTML = ''; // Clear existing cells
    createGrid(gridSize); // Recreate grid
}

resetButton.addEventListener('click', resetGrid);

// Initialize grid on page load
createGrid(gridSize);
