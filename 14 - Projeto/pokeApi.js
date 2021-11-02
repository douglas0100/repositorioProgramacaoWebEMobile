const pokeInput = document.getElementById("pokename");
const btSearch = document.getElementById("btSearch");
const pokeName = document.getElementById("nameOut");
const pokeSprite = document.getElementById("sprite");
const pokeId = document.getElementById("ident");
const pokeType = document.getElementById("type");

let urlPrev = null;
let urlNext = null;

function getData() {
    let input = pokeInput.value.trim();
    if (!input) {
        alert("Digite uma entrada valida!");
        return;
    }
    fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
        .then(response => response.json())
        .then(dados => {
        pokeName.innerHTML = `Name: ${dados.name}`;
        pokeId.innerHTML = `Ident: ${dados.id}`;
        pokeType.innerHTML = `Type: ${dados.types.name}`;
        pokeSprite.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dados.id}.png`;
        //dados.sprites.other.home.front_default;
        pokeInput.value = "";
        pokeInput.focus();
        console.log(`Nome = ${dados.name}`);
    })
    .catch(e => {
        console.log("Erro", e);
        alert("Digite uma entrada valida!");
        pokeInput.value = "";
        pokeInput.focus();
        return;
    });
}

btSearch.onclick = getData;
