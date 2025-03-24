"use strict";
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
async function getAJoke() {
    try {
        const response = await fetch(urlFamilyJoke, optionsFamilyJoke);
        const result = await response.json();
        console.log(response);
    }
    catch (error) {
        console.error(error);
    }
}
const urlDadJoke = 'https://icanhazdadjoke.com/';
const optionsDadJoke = {
    headers: {
        'Accept': 'application/json'
    }
};
async function getADadJoke() {
    try {
        const response = await fetch(urlDadJoke, optionsDadJoke);
        const pepe = await response.json();
        console.log(pepe.joke);
    }
    catch (error) {
        console.log(error);
    }
}
getADadJoke();
//# sourceMappingURL=script.js.map