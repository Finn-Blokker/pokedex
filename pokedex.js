window.addEventListener("load", function () {
    console.log("de pagina is geladen!")
}); 
document.querySelector('#search_button').addEventListener('click', async function () {
    let pokemon = document.getElementById("myForm").value;
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let pokemons = await response.json()
    console.log(pokemons);
    document.querySelector("#output").innerHTML = `<p>naam = ${pokemons.name} <br>
height = ${pokemons.height} <br>
id = ${pokemons.id} <br> <br>
<img alt="${pokemons.naam}" src="${pokemons.sprites.front_default}">
<img alt="${pokemons.naam}" src="${pokemons.sprites.back_default}"><br>
<img alt="${pokemons.naam}" src="${pokemons.sprites.front_shiny}">
<img alt="${pokemons.naam}" src="${pokemons.sprites.back_shiny}"><br>
</p>`
});