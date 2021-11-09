const pokeInput = document.getElementById("pokename");
const btSearch = document.getElementById("btSearch");
const pokeName = document.getElementById("nameOut");
const pokeSprite = document.getElementById("sprite");
const pokeId = document.getElementById("ident");
const pokeType = document.getElementById("type");

let result = {};

function getData() {
    let input = pokeInput.value.toLowerCase().trim();
    if (!input) {
        alert("Digite uma entrada valida!");
        return;
    }
    fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
        .then(response => response.json())
        .then(dados => {
        result = dados;
        pokeName.innerHTML = `Nome: ${dados.name}`;
        pokeId.innerHTML = `Ident: ${dados.id}`;
        //pokeType.innerHTML = `Type: ${dados.types.name}`;
        pokeSprite.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dados.id}.png`;
        //dados.sprites.other.home.front_default;
        pokeInput.value = "";
        pokeInput.focus();
        console.log(`Nome = ${dados.name}`);
        getType();
    })
    .catch(e => {
        console.log("Erro", e);
        alert("Digite uma entrada valida!");
        pokeInput.value = "";
        pokeInput.focus();
        return;
    });
}

function getType() {
    let i = 0;
    result.types.forEach(element => {
        if(i == 0) {
            pokeType.innerHTML = ` Tipo: ${element.type.name}`;
        } else {
            pokeType.innerHTML = pokeType.innerHTML + ` / ${element.type.name}`;
        }
        i++;
    });
}

btSearch.onclick = getData;
