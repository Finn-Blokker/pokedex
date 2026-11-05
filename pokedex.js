let pokemons;
let pokemonid = 0;
window.addEventListener("load", function () {
    console.log("de pagina is geladen!")
});
async function searchpokemon(search = document.getElementById("myForm").value) {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${String(search).trim().toLowerCase()}`);
        
        if (search === "0") {
            missingno()
        }
        else if (search === "779") {
            bruxish()
        }
        else if (search === "bruxish"){
            bruxish()
        }
        else {
        pokemons = await response.json()
        pokemonid = pokemons.id
        console.log(pokemons)

    if (!response.ok){
        alert("pokemon niet gevonden")
    }
    
        document.querySelector("#pokemonvoorkant").innerHTML = `
<img alt="${pokemons.name}" src="${pokemons.sprites.front_default}" height="250px" width="250px"><br> `
     document.querySelector("#pokemonachterkant").innerHTML = `
<img class="naar-onder" alt="${pokemons.name}" src="${pokemons.sprites.back_default}" height="250px" width="250px">`
    
    

    document.querySelector("#naaminbox").textContent = 
    `${pokemons.name}` + "\r\n" + 
    "id =" +`${pokemons.id}`

    
    setstats()

    document.getElementById("myForm").value = pokemons.name
    settypes(pokemons)
    await makedivs()
    return pokemons
     }}
function nextpokemon(){
    searchpokemon(pokemonid + 1)
    makedivs()
}
function backpokemon(){
    searchpokemon(pokemonid - 1)
    makedivs()
    }
function settypes(pokemons){
    document.getElementById("typebox").innerHTML = `<img alt="${pokemons.types[0].type.name}" src="/icons/${pokemons.types[0].type.name}.svg" height="30px" width="30px">`
    document.getElementById("typebox2").innerHTML = `<img alt="${pokemons.types[1].type.name}" src="/icons/${pokemons.types[1].type.name}.svg" height="30px" width="30px">`
}
function statschanger() {
    const content = document.getElementById("statsbox");
    if (content.className === "secondpage") {
        setstats();
    } else if (content.className === "firstpage") {
        setstats2();
    }
}
function setstats(){
    const content = document.getElementById("statsbox")
    const content2 = document.getElementById("statsbox2")
    document.getElementById("scrollstats").innerText = "⬇️"
    document.getElementById("scrollstats").style.alignItems = "end"

    content.className = "firstpage"
    content.textContent =
        "HP = " + `${pokemons.stats[0].base_stat}` +  "\r\n\r\n" +
        "Spd = " + `${pokemons.stats[5].base_stat}` + "\r\n"
    content2.textContent =
        "Atk = " + `${pokemons.stats[1].base_stat}` + "\r\n\r\n" +
        "Def = " + `${pokemons.stats[2].base_stat}`
}
function setstats2(){
    const content = document.getElementById("statsbox")
    const content2 = document.getElementById("statsbox2")
    document.getElementById("scrollstats").innerText = "️⬆️"
    document.getElementById("scrollstats").style.alignItems = "start"
    content.className = "secondpage"
    content.textContent =
        "Height =" + `${pokemons.height}` + "\r\n\r\n" +
        "Weight = " + `${pokemons.stats[5].base_stat}`  + "\r\n"
    content2.textContent =
        "SpAtk =" + `${pokemons.stats[3].base_stat}`  + "\r\n\r\n" +
        "SpDef=" + ` ${pokemons.stats[4].base_stat}`

}
async function makedivs() {
    document.querySelectorAll(".overviewbox").forEach(img => img.remove());
    
    let requests = [];
    for (let j = 0; j < 15; j++) {
        requests.push(
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemons.id + j}`)
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
function missingno(){
    pokemonid = 0;
    document.querySelector("#pokemonachterkant").innerHTML =
        "<img src='photo/MissingNoLeft.png' height='250' width='250'>";
    document.querySelector("#pokemonvoorkant").innerHTML =
        "<img src='photo/MissingNoRight.png' height='250' width='250'>";
    document.querySelector("#naaminbox").textContent =
        `missingno` + "\r\n" +
        "id = missingno"
    document.getElementById("typebox").textContent = "type: bird"
    document.getElementById("statsbox").textContent = "\r\n" +
        "HP = 33" + "\r\n" +
        "Atk = 136" + "\r\n" +
        "Sp = 29" + "\r\n" +
        "Def = 0" 
}
function bruxish(){
    pokemonid = 779;
    document.querySelector("#pokemonachterkant").innerHTML =
        "<img src='photo/bruxish-back.png' height='250' width='250'>";
    document.querySelector("#pokemonvoorkant").innerHTML =
        "<img src='photo/bruxish-front.png' height='250' width='250'>";
    document.querySelector("#naaminbox").textContent =
        `bruxish` + "\r\n" +
        "id = 779"
    document.getElementById("typebox").innerHTML =  "<img src='icons/water.svg' height='30' width='30'>";
    document.getElementById("typebox2").innerHTML =  "<img src='icons/fairy.svg' height='30' width='30'>";
    document.getElementById("statsbox").textContent =
        "HP = 68" + "\r\n" +
        "Sp = 92" + "\r\n"
    document.getElementById("statsbox2").textContent =
        "Atk = 105" + "\r\n" +
        "Def = 70"
}
document.querySelector("#myForm").addEventListener('keydown', function (keypress) {
    if (keypress.key === 'Enter') {
        searchpokemon();
    }
})

