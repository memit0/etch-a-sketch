const container = document.querySelector(".container");
const gridButton = document.querySelector(".grid-btn");
const clearButton = document.querySelector(".clear-btn");
const colorButton = document.querySelector(".color-btn");
const opacityButton = document.querySelector(".opacity-btn");
const fragment = document.createDocumentFragment();

function createGrid(length) {
  const grid = length * length;

  const squareLength = 960 / length;
  for (let i = 0; i < grid; i++) {
    const div = document.createElement("div");
    fragment.appendChild(div);
    div.style.height = squareLength + "px";
    div.style.width = squareLength + "px";
    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = "black";
    });
  }
  container.appendChild(fragment);
}

function clearGrid() {
  const div = container.querySelectorAll("div");
  div.forEach((div) => div.remove());
}

createGrid(16);

gridButton.addEventListener("click", () => {
  const maxGridSize = 100;

  let userLength = Number(
    window.prompt(`What should the grid size be? (1-${maxGridSize})`, ""),
  );
  if (1 <= userLength && userLength < maxGridSize) {
    // User input a valid number
    clearGrid();
    createGrid(userLength);
  } else {
    // User entered invalid number
    alert("Please enter a valid number");
  }
});

colorButton.addEventListener("click", () => {});

opacityButton.addEventListener("click", () => {});
