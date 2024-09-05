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
            let randomColor = getRandomRGB();
            cell.style.backgroundColor = randomColor; // Change color on hover
        });
        gridContainer.appendChild(cell);
    }
}

function getRandomRGB() {
    // Generate random values for R, G, and B components (0-255)
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  
    // Return the RGB color in string format so the function can run
    return `rgb(${r}, ${g}, ${b})`;
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
     alert(`You chose: ${gridSize}`); 

    gridContainer.innerHTML = '';   //reset grid and initialize it
    createGrid(gridSize);
}


resetButton.addEventListener('click', resetGrid);
promptButton.addEventListener('click', getGridSize);
