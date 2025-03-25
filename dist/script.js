"use strict";
const divJoke = document.getElementById("divJoke");
window.addEventListener('load', () => {
    fetchAJoke();
});
const urlWeather = 'https://yahoo-weather5.p.rapidapi.com/weather?location=Barcelona&format=json&u=c';
const optionsWeather = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '9d6679a56bmshe7aac32a188b522p181bd4jsnb2ed9881b884',
        'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
    }
};
async function getWeather() {
    try {
        const response = await fetch(urlWeather, optionsWeather);
        const result = await response.json();
        console.log(result);
    }
    catch (error) {
        console.error(error);
    }
}
const urlFamilyJoke = 'https://jokes-always.p.rapidapi.com/family';
const optionsFamilyJoke = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '9d6679a56bmshe7aac32a188b522p181bd4jsnb2ed9881b884',
        'x-rapidapi-host': 'jokes-always.p.rapidapi.com'
    }
};
const urlDadJoke = 'https://icanhazdadjoke.com/';
const optionsDadJoke = {
    headers: {
        'Accept': 'application/json'
    }
};
const urlChuckNorris = 'https://api.chucknorris.io/jokes/random';
async function fetchAJoke() {
    let randomNumber = Math.ceil(Math.random() * 10);
    try {
        if (randomNumber % 3 === 0) {
            const response = await fetch(urlFamilyJoke, optionsFamilyJoke);
            const result = await response.json();
            print(result.data);
        }
        if (randomNumber % 3 === 1) {
            const response = await fetch(urlDadJoke, optionsDadJoke);
            const result = await response.json();
            print(result.joke);
        }
        else {
            const response = await fetch(urlChuckNorris);
            const result = await response.json();
            print(result.value);
        }
    }
    catch (error) {
        return `Oops! Seems like there's been an error fetching jokes: ${error}`;
    }
}
function print(joke) {
    divJoke.innerHTML = joke;
}
//# sourceMappingURL=script.js.map