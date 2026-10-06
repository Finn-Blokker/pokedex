window.addEventListener("load", function () {
    console.log("de pagina is geladen!")
});
document.querySelector('#search_button').addEventListener('click', async function () {
    let pokemon = document.getElementById("myForm").value;
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let pokemons = await response.json()
    console.log(pokemons);
    console.log(pokemons.types[0].type.name);
    document.querySelector("#output").innerHTML =`
<img alt="${pokemons.name}" src="${pokemons.sprites.front_default}">
<img alt="${pokemons.name}" src="${pokemons.sprites.back_default}"><br>
<img alt="${pokemons.name}" src="${pokemons.sprites.front_shiny}">
<img alt="${pokemons.name}" src="${pokemons.sprites.back_shiny}"><br>
</p>`
    document.querySelector("#namebox").innerHTML = `<p>naam = ${pokemons.name} <br>
height = ${pokemons.height} <br>
atk= ${pokemons.stats[1].base_stat} <br>
id = ${pokemons.id} <br> <br>`

document.querySelector("#statsbox").innerHTML = `<p> HP= ${pokemons.stats[0].base_stat} <br>

 Def= ${pokemons.stats[2].base_stat} <br>
 speed= ${pokemons.stats[5].base_stat} <br> 
type= ${pokemons.types[0].type.name} <br>
type= ${pokemons.types[1].type.name} <br>`

document.querySelector('#nextpage').addEventListener('click', function () {
    const content = document.getElementById("statsbox");
    if (content.innerHTML ===`<p> HP= ${pokemons.stats[0].base_stat} <br>

 Def= ${pokemons.stats[2].base_stat} <br>
 speed= ${pokemons.stats[5].base_stat} <br> 
type= ${pokemons.types[0].type.name} <br>
type= ${pokemons.types[1].type.name} <br>` ){
        content.innerHTML ="HP= ${pokemons.stats[0].base_stat} <br>"
    }
    else {
        content.innerHTML= `<p> HP= ${pokemons.stats[0].base_stat} <br>

 Def= ${pokemons.stats[2].base_stat} <br>
 speed= ${pokemons.stats[5].base_stat} <br> 
type= ${pokemons.types[0].type.name} <br>
type= ${pokemons.types[1].type.name} <br>`

    }
    document.querySelector('#namebox').innerHTML=  `<p> HP= ${pokemons.stats[0].base_stat}`})})











