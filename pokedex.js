window.addEventListener("load", function () {
    console.log("de pagina is geladen!")
});
async function searchpokemon() {
        let pokemon = document.getElementById("myForm").value;
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        let pokemons = await response.json()

        document.querySelector("#pokemonvoorkant").innerHTML = `
<img alt="${pokemons.name}" src="${pokemons.sprites.front_default}" height="250px" width="250px"><br> `
     document.querySelector("#pokemonachterkant").innerHTML = `
<img class="naar-onder" alt="${pokemons.name}" src="${pokemons.sprites.back_default}" height="250px" width="250px">
`
    
    document.querySelector("#naaminbox").textContent = 
    `${pokemons.name}` + "\r\n" + 
    "id =" +`${pokemons.id}`
    
    document.querySelector("#statsbox").textContent = "\r\n" +
    "HP = " + `${pokemons.stats[0].base_stat}` +  "\r\n" + 
    "Atk = " + `${pokemons.stats[1].base_stat}` + "\r\n" +
    "Sp = " + `${pokemons.stats[5].base_stat}` + "\r\n" +
    "Def = " + `${pokemons.stats[2].base_stat}` + "\r\n"
    
    
    document.getElementById("myForm").value = `${pokemons.id}`


    document.querySelector('#scrollstats').addEventListener('click', function () {
        const content = document.getElementById("statsbox");
        if (content.className === "secondpage" ){
            document.getElementById("scrollstats").innerText = "⬇️"
            document.getElementById("scrollstats").style.alignItems = "end"

            content.className = "firstpage"
            content.textContent = "\r\n" +
                "HP = " + `${pokemons.stats[0].base_stat}` +  "\r\n" + 
                "Atk = " + `${pokemons.stats[1].base_stat}` + "\r\n" +
                "Sp = " + `${pokemons.stats[5].base_stat}` + "\r\n" +
                "Def = " + `${pokemons.stats[2].base_stat}` + "\r\n"
            
        }
        else if (content.className === "firstpage" ) {
            document.getElementById("scrollstats").innerText = "️⬆️"
            document.getElementById("scrollstats").style.alignItems = "start"
            
            content.className = "secondpage"
            content.textContent = "\r\n" +
                "Height =" + `${pokemons.height}` + "\r\n" + 
                "SpAtk =" + `${pokemons.stats[3].base_stat}`  + "\r\n" +
                "Weight = " + `${pokemons.stats[5].base_stat}`  + "\r\n" +
                "SpDef=" + ` ${pokemons.stats[4].base_stat}` }})}

function nextpokemon(){
    let nr = document.getElementById("myForm").value;
    console.log(nr)
    document.getElementById("myForm").value = Number(nr) + 1
    searchpokemon()
}


function backpokemon(){
    let nr = document.getElementById("myForm").value;
    console.log(nr)
    document.getElementById("myForm").value = Number(nr) - 1
    searchpokemon()
    }

document.querySelector("#myForm").addEventListener('keydown', function (keypress){
    if (keypress.key === 'Enter') {
        searchpokemon();
    }});
