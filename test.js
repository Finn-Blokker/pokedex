async function test() {

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
    let pokemons = await response.json()
    console.log(pokemons);
}