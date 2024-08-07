// script.js
const main = document.getElementById('main');
const resetButton = document.getElementById('resetButton');
let darknessLevel = 0;

// Function to create the grid
function createGrid(squaresPerSide) {
  // Clear the existing grid
  main.innerHTML = '';

  // Set up the grid container styles
  main.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
  main.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;

  // Create the grid squares
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const div = document.createElement('div');
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.backgroundColor = getRandomColor(darknessLevel);
    div.style.border = '1px solid #ddd';
    
    // Add a hover event listener to each square
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = 'black'; // Change color on hover
    });

    main.appendChild(div);
  }
}

// Function to reset the grid
function resetGrid() {
  const squaresPerSide = parseInt(prompt('Enter the number of squares per side for the new grid (max 100):'));
  if (squaresPerSide && squaresPerSide > 0 && squaresPerSide <= 100) {
    darknessLevel = Math.min(darknessLevel + 1, 10); // Increase darkness level by 10% each reset
    createGrid(squaresPerSide);
  } else {
    alert('Please enter a valid number between 1 and 100');
  }
}

// Function to get a random color and adjust it based on the darkness level
function getRandomColor(darknessLevel) {
  const factor = 1 - (darknessLevel * 0.1);
  const r = Math.floor(Math.random() * 255 * factor);
  const g = Math.floor(Math.random() * 255 * factor);
  const b = Math.floor(Math.random() * 255 * factor);
  return `rgb(${r},${g},${b})`;
}

// Event listener for the reset button
resetButton.addEventListener('click', resetGrid);

// Initial grid setup
createGrid(16);

// Initial grid setup
createGrid(16);
