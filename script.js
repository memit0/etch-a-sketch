const container = document.querySelector(".container");
const fragment = document.createDocumentFragment();
const grid = 16 * 16;

for (let i = 0; i < grid; i++) {
  const div = document.createElement("div");
  fragment.appendChild(div);
  div.addEventListener("mouseenter", () => {
    div.style.backgroundColor = "black";
  });
}

container.appendChild(fragment);
