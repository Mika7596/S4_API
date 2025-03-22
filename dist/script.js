"use strict";
const divWeather = document.getElementById("divWeather");
divWeather.innerHTML = "Holaaa";
function getAJoke() {
    fetch('https://icanhazdadjoke.com/').then(response => console.log(response));
}
const url = "https://pokeapi.co/api/v2/pokemon/pikachu/";
async function getPokemon() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.weight);
    }
    catch (error) {
        console.log("Error fetching pokemons: ", error);
    }
}
getPokemon();
//# sourceMappingURL=script.js.map