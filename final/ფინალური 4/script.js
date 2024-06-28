let jokeBtn = document.getElementById("jokeBtn");
let likebtn = document.getElementById("likebtn");
let dislike = document.getElementById("dislikebtn");
let div = document.getElementById("div");

fetch("https://api.chucknorris.io/jokes/random")
  .then((res) => res.json())
  .then((data) => {
    jokeBtn.addEventListener("click", function () {
      let joke = document.createElement("p");
      joke.textContent = data.value;
      jokeBtn.appendChild(joke);
    });

    let ricxvi = 0;
    let p = document.createElement("p");

    likebtn.addEventListener("click", function () {
      ricxvi = ricxvi + 1;
      p.textContent = `total likes dislike : ${ricxvi}`;
      div.appendChild(p);
    });

    dislikebtn.addEventListener("click", function () {
        ricxvi = ricxvi - 1;
        p.textContent = `total likes dislike : ${ricxvi}`;
      });
  });
