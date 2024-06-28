let div = document.getElementById("div")

fetch("https://api.chucknorris.io/jokes/random")
.then((response) =>response.json())
.then((data) =>{

    let p = document.createElement("p")
    p.textContent = data.value
    div.appendChild(p)
})