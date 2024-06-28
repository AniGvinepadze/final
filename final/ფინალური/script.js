let maindiv = document.getElementById("main-btn");
let open = document.querySelector(".open");
let close = document.querySelector(".close");
let div = document.querySelector(".div");

open.addEventListener("click", function () {
  open.classList.toggle("active");

  div.style.display = "block";
});

close.addEventListener("click", function () {
  div.style.display = "none";
});
