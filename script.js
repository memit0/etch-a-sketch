const container = document.querySelector(".container");
const gridButton = document.querySelector(".grid-btn");
const clearButton = document.querySelector(".clear-btn");
const colorButton = document.querySelector(".color-btn");
const opacityButton = document.querySelector(".opacity-btn");
const fragment = document.createDocumentFragment();

let userLength = 16;

function createGrid(length, option = "black") {
  const grid = length * length;

  const squareLength = 960 / length;
  for (let i = 0; i < grid; i++) {
    const div = document.createElement("div");
    fragment.appendChild(div);
    div.style.height = squareLength + "px";
    div.style.width = squareLength + "px";

    if (option === "color") {
      // generate a random color when user clicks
      console.log("color");

      div.addEventListener("mouseenter", () => {
        const randomColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
        div.style.backgroundColor = randomColor;
      });
    } else if (option === "opacity") {
      // 1. Set the initial state for THIS specific div
      div.style.backgroundColor = "black";
      div.style.opacity = 0; // Start invisible

      div.addEventListener("mouseenter", () => {
        // 2. Get the current opacity (it comes back as a string, so use parseFloat)
        let currentOpacity = parseFloat(div.style.opacity);

        // 3. Increment it, but don't go past 1.0 (100%)
        if (currentOpacity < 1) {
          div.style.opacity = currentOpacity + 0.1;
        }
      });
    } else {
      div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "black";
      });
    }
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

  userLength = Number(
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

clearButton.addEventListener("click", () => {
  clearGrid();
  createGrid(userLength);
});

colorButton.addEventListener("click", () => {
  clearGrid();
  createGrid(userLength, "color");
});

opacityButton.addEventListener("click", () => {
  clearGrid();
  createGrid(userLength, "opacity");
});
