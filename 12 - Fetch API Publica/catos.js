//const axios = require("axios");

const btLoad = document.getElementById("btLoad");
const img = document.getElementById("img");

function loadCatImage() {
  fetch(`https://api.thecatapi.com/v1/images/search`)
    .then(response => response.json())
    .then(dados => {
        img.src = dados.message;
    });
}

function loadCatName() {
  fetch("https://swapi.dev/api/people/?page=1")
    .then(response => response.json())
    .then(dados => {
      catName = dados.results;
    });
}

btLoad.onclick = loadCatImage;
btLoad.onclick = loadCatName;
loadCatName();
loadCatImage();
