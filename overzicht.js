let pokemons;
async function searchpokemon(search = document.getElementById("myFormoverzicht").value) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${String(search).trim().toLowerCase()}`);
    pokemons = await response.json();
    await makedivs();
}
async function makedivs() {
    document.querySelectorAll(".overviewbox").forEach(img => img.remove());
    let startId = pokemons.id;
    let requests = [];
    for (let j = 0; j < 15; j++) {
        requests.push(
            fetch(`https://pokeapi.co/api/v2/pokemon/${startId + j}`)
                .then(response => response.json())
        );
    }
    let pokemonAll = await Promise.all(requests);
    pokemonAll.forEach(pokemon => {
        let div = document.createElement('div');
        div.className = "overviewbox";
        let a = document.createElement('a');
        let img = document.createElement('img');
        a.href = "podedex.html"
        img.src = pokemon.sprites.front_default;
        img.alt = pokemon.name;
        div.appendChild(a);
        a.appendChild(img);
        document.getElementById("overzicht").appendChild(div);
    });
}

document.querySelector("#myFormoverzicht").addEventListener('keydown', function (keypress) {
    if (keypress.key === 'Enter') {
        searchpokemon();
    }
});