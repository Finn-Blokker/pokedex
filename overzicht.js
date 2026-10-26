let pokemons;
async function searchpokemon(search = document.getElementById("myForm").value) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${String(search).trim().toLowerCase()}`);
    pokemons = await response.json();
    await makedivs();
}
async function makedivs() {
    document.querySelectorAll(".test").forEach(div => div.remove());
    let startId = pokemons.id;
    let requests = [];
    
    for (let j = 0; j < 12; j++) {
        requests.push(
            fetch(`https://pokeapi.co/api/v2/pokemon/${startId + j}`)
                .then(response => response.json())
        );
    }
    let pokemonAll = await Promise.all(requests);
    pokemonAll.forEach(pokemon => {
        let div = document.createElement('div');
        div.className = "overviewbox";
        let img = document.createElement('img');
        img.src = pokemon.sprites.front_default;
        img.alt = pokemon.name;
        div.appendChild(img);
        document.getElementById("overzicht").appendChild(div);
    });
}


document.querySelector("#myForm").addEventListener('keydown', function (keypress) {
    if (keypress.key === 'Enter') {
        searchpokemon();
    }
});