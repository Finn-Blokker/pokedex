window.addEventListener("load", function () {
    console.log("de pagina is geladen!")
});
async function searchpokemon() {
        let nr = document.getElementById("myForm").value;
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nr}`)
        let pokemons = await response.json()
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
    
    
    document.getElementById("myForm").value = `${pokemons.id}`
    
    settypes(pokemons)
    
    document.querySelector('#scrollstats').addEventListener('click', function () {
        const content = document.getElementById("statsbox");
        if (content.className === "secondpage" ){
            setstats(pokemons)
        }
        else if (content.className === "firstpage" ) {
            setstats2(pokemons) }})}

function nextpokemon(){
    let nr = document.getElementById("myForm").value;
    console.log(nr)
    document.getElementById("myForm").value = Number(nr) + 1
    searchpokemon(nr)
}

function backpokemon(){
    let nr = document.getElementById("myForm").value;
    console.log(nr)
    document.getElementById("myForm").value = Number(nr) - 1
    searchpokemon(nr)
    }
    
function settypes(pokemons){
    document.getElementById("typebox").textContent = `${pokemons.types[0].type.name}`
}
function statschanger() {
    const content = document.getElementById("statsbox");

    if (content.className === "secondpage") {
        setstats();
    } else if (content.className === "firstpage") {
        setstats2();
    }
}
function setstats(currentpokemon){
    const content = document.getElementById("statsbox")
    document.getElementById("scrollstats").innerText = "⬇️"
    document.getElementById("scrollstats").style.alignItems = "end"

    content.className = "firstpage"
    content.textContent = "\r\n" +
        "HP = " + `${currentpokemon.stats[0].base_stat}` +  "\r\n" +
        "Atk = " + `${currentpokemon.stats[1].base_stat}` + "\r\n" +
        "Sp = " + `${currentpokemon.stats[5].base_stat}` + "\r\n" +
        "Def = " + `${currentpokemon.stats[2].base_stat}`
}
function setstats2(currentpokemon){
    const content = document.getElementById("statsbox")
    document.getElementById("scrollstats").innerText = "️⬆️"
    document.getElementById("scrollstats").style.alignItems = "start"
    console.log(currentpokemon)
    content.className = "secondpage"
    content.textContent = "\r\n" +
        "Height =" + `${currentpokemon.height}` + "\r\n" +
        "SpAtk =" + `${currentpokemon.stats[3].base_stat}`  + "\r\n" +
        "Weight = " + `${currentpokemon.stats[5].base_stat}`  + "\r\n" +
        "SpDef=" + ` ${currentpokemon.stats[4].base_stat}`
}
document.querySelector("#myForm").addEventListener('keydown', function (keypress) {
    if (keypress.key === 'Enter') {
        searchpokemon();
    }
})
