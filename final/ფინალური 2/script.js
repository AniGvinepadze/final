let mainDiv = document.getElementById("btn-container");
let red = document.getElementById("red");
let green = document.getElementById("green");
let blue = document.getElementById("blue");

red.addEventListener("click", function () {
  red.classList.toggle("active");

  let redDiv = document.createElement("div");
  redDiv.classList.add("red-div");
  red.appendChild(redDiv);
});

green.addEventListener("click", function () {
    green.classList.toggle("active");
  
    let greenDiv = document.createElement("div");
    greenDiv.classList.add("green-div");
    green.appendChild(greenDiv);
  });
  
  blue.addEventListener("click", function () {
    blue.classList.toggle("active");
  
    let blueDiv = document.createElement("div");
    blueDiv.classList.add("blue-div");
    blue.appendChild(blueDiv);
  });
  