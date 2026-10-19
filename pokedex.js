window.addEventListener("load", function () {
    console.log("de pagina is geladen!")
});
async function searchpokemon() {
        let pokemon = document.getElementById("myForm").value;
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        let pokemons = await response.json()

        document.querySelector("#pokemonvoorkant").innerHTML = `
<img alt="${pokemons.name}" src="${pokemons.sprites.front_default}"><br> `
     document.querySelector("#pokemonachterkant").innerHTML = `
<img alt="${pokemons.name}" src="${pokemons.sprites.back_default}">

 
</p>`
    document.querySelector("#statsbox").innerHTML = `<p> HP= ${pokemons.stats[0].base_stat} <br>
Atk = ${pokemons.stats[1].base_stat} <br>
 speed= ${pokemons.stats[5].base_stat} <br> 
  Def= ${pokemons.stats[2].base_stat} <br>`
    document.getElementById("myForm").value = `${pokemons.id}`


    document.querySelector('#scrollstats').addEventListener('click', function () {
        const content = document.getElementById("statsbox");
        if (content.className === "secondpage" ){
            document.getElementById("scrollstats").innerText = "⬇️"
            document.getElementById("scrollstats").style.alignItems = "end"
            content.innerHTML =
                `<p>
            HP= ${pokemons.stats[0].base_stat} <br>
            Atk = ${pokemons.stats[1].base_stat} <br>
            speed= ${pokemons.stats[5].base_stat} <br> 
            Def= ${pokemons.stats[2].base_stat} <br>`
            content.className = "firstpage"
        }
        else if (content.className === "firstpage" ) {
            document.getElementById("scrollstats").innerText = "️⬆️"
            document.getElementById("scrollstats").style.alignItems = "start"
            content.className = "secondpage"
            content.innerHTML =
                `<p>
            Height= ${pokemons.height} <br>
            SpAtk = ${pokemons.stats[3].base_stat} <br>
            Weight= ${pokemons.stats[5].base_stat} <br> 
            SpDef= ${pokemons.stats[4].base_stat} <br>`}})}
function nextpokemon(){
    let nr = document.getElementById("myForm").value;
    console.log(nr)
    document.getElementById("myForm").value = Number(nr) + 1
    searchpokemon()
}

document.querySelector("#myForm").addEventListener('keydown', function (keypress){
    if (keypress.key === 'Enter') {
        searchpokemon();
    }
function backpokemon(){
    let nr = document.getElementById("myForm").value;
    console.log(nr)
    document.getElementById("myForm").value = Number(nr) - 1
    searchpokemon()
    }});




   










