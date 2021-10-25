const screen = document.querySelector(".screen");
const clear = document.querySelector(".clear");
const noOfTiles = document.querySelector(".no-of-tiles");
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
noOfTiles.value = slider.value; // Display the default slider value

let divs = [];

let dimension = 16;
let divWidth = 500 / dimension;
let isDrawing = false;

function createScreen() {
  console.log(dimension);
  for (i = 1; i <= dimension * dimension; i++) {
    divs.push(document.createElement("div"));
  }
  divWidth = 500 / dimension;

  divs.forEach((singleDiv) => {
    singleDiv.style.width = `${divWidth}px`;
    singleDiv.style.height = `${divWidth}px`;
    screen.appendChild(singleDiv);
    singleDiv.addEventListener("mouseover", () => {
      if (isDrawing) {
        singleDiv.style.backgroundColor = "black";
      }
    });
    singleDiv.addEventListener("mousedown", () => {
      singleDiv.style.backgroundColor = "black";
      isDrawing = true;
    });
    singleDiv.addEventListener("mouseup", () => {
      isDrawing = false;
    });
    console.log("number of divs");
  });
}

function deleteScreen() {
  divs.forEach((singleDiv) => {
    screen.removeChild(singleDiv);
  });
  divs = [];
}

function clearScreen() {
  divs.forEach((singleDiv) => {
    singleDiv.style.backgroundColor = "rgb(241, 241, 241)";
  });
}

createScreen();

clear.addEventListener("click", () => {
  clearScreen();
});

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  noOfTiles.value = this.value;
  dimension = noOfTiles.value;
  deleteScreen();
  createScreen();
};
