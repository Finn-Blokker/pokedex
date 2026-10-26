let pokemons;
let pokemonid = 0;
window.addEventListener("load", function () {
    console.log("de pagina is geladen!")
});
async function searchpokemon(search = document.getElementById("myForm").value) {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${String(search).trim().toLowerCase()}`);
        if (!response.ok) {
            alert("pokemon not found");
            return;
        }
        pokemons = await response.json()
        pokemonid = pokemons.id
        console.log(pokemons)
    
        document.querySelector("#pokemonvoorkant").innerHTML = `
<img alt="${pokemons.name}" src="${pokemons.sprites.front_default}" height="250px" width="250px"><br> `
     document.querySelector("#pokemonachterkant").innerHTML = `
<img class="naar-onder" alt="${pokemons.name}" src="${pokemons.sprites.back_default}" height="250px" width="250px">`
    
    document.querySelector("#naaminbox").textContent = 
    `${pokemons.name}` + "\r\n" + 
    "id =" +`${pokemons.id}`
    
    document.querySelector("#statsbox").textContent = "\r\n" +
    "HP = " + `${pokemons.stats[0].base_stat}` +  "\r\n" + 
    "Atk = " + `${pokemons.stats[1].base_stat}` + "\r\n" +
    "Sp = " + `${pokemons.stats[5].base_stat}` + "\r\n" +
    "Def = " + `${pokemons.stats[2].base_stat}` + "\r\n"

    document.getElementById("myForm").value = pokemons.name
    settypes(pokemons)
    return pokemons
     }
function nextpokemon(){
    searchpokemon(pokemonid + 1)
}
function backpokemon(){
    searchpokemon(pokemonid - 1)
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
    document.getElementById("scrollstats").innerText = "⬇️"
    document.getElementById("scrollstats").style.alignItems = "end"

    content.className = "firstpage"
    content.textContent = "\r\n" +
        "HP = " + `${pokemons.stats[0].base_stat}` +  "\r\n" +
        "Atk = " + `${pokemons.stats[1].base_stat}` + "\r\n" +
        "Sp = " + `${pokemons.stats[5].base_stat}` + "\r\n" +
        "Def = " + `${pokemons.stats[2].base_stat}`
}
function setstats2(){
    const content = document.getElementById("statsbox")
    document.getElementById("scrollstats").innerText = "️⬆️"
    document.getElementById("scrollstats").style.alignItems = "start"
    content.className = "secondpage"
    content.textContent = "\r\n" +
        "Height =" + `${pokemons.height}` + "\r\n" +
        "SpAtk =" + `${pokemons.stats[3].base_stat}`  + "\r\n" +
        "Weight = " + `${pokemons.stats[5].base_stat}`  + "\r\n" +
        "SpDef=" + ` ${pokemons.stats[4].base_stat}`
}
document.querySelector("#myForm").addEventListener('keydown', function (keypress) {
    if (keypress.key === 'Enter') {
        searchpokemon();
    }
})

