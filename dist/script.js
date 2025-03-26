"use strict";
const divWeather = document.getElementById('divWeather');
const parHour = document.getElementById("parHour");
const parDate = document.getElementById("parDate");
const parTemp = document.getElementById('parTemp');
const parCity = document.getElementById("parCity");
const parJoke = document.getElementById("parJoke");
window.addEventListener('load', () => {
    displayHour();
    displayDate();
    getWeather();
    fetchAJoke();
});
function displayHour() {
    let time = new Date();
    let hour = time.getHours().toString();
    let min = time.getMinutes().toString();
    let sec = time.getSeconds().toString();
    hour = Number(hour) < 10 ? "0" + hour : hour;
    min = Number(min) < 10 ? "0" + min : min;
    sec = Number(sec) < 10 ? "0" + sec : sec;
    try {
        parHour.innerText = `${hour}:${min}:${sec}`;
    }
    catch {
        parHour.innerText = "Cannot display the hour at the moment.";
    }
}
setInterval(displayHour, 1000);
function displayDate() {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();
    try {
        parDate.innerText = `${year}/${month}/${day}`;
    }
    catch {
        parDate.textContent = "Cannot show the date right now.";
    }
}
setInterval(displayDate, 3600000);
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
        console.log(result.current_observation.condition.temperature);
        console.log(result.current_observation.condition.text);
        console.log(result.location.city);
        printWeather(result);
    }
    catch (error) {
        divWeather.innerText = `Seems like we cannot get weather information right now: ${error}`;
    }
}
function printWeather(result) {
    const spanTemp = document.createElement('span');
    spanTemp.innerText = result.current_observation.condition.temperature;
    const spanText = document.createElement("span");
    spanText.innerText = result.current_observation.condition.text;
    parCity.innerText = result.location.city;
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
const arrayJokes = [];
class Joke {
    joke;
    score;
    date;
    constructor(joke, score, date) {
        this.joke = joke;
        this.score = score;
        this.date = date;
    }
}
async function fetchAJoke() {
    let randomNumber = Math.ceil(Math.random() * 10);
    let text = "";
    try {
        if (randomNumber % 3 === 0) {
            const response = await fetch(urlFamilyJoke, optionsFamilyJoke);
            const result = await response.json();
            text = result.data;
        }
        if (randomNumber % 3 === 1) {
            const response = await fetch(urlDadJoke, optionsDadJoke);
            const result = await response.json();
            text = result.joke;
        }
        else {
            const response = await fetch(urlChuckNorris);
            const result = await response.json();
            text = result.value;
        }
        printAJoke(text);
        saveJoke(text);
    }
    catch (error) {
        return `Oops! Seems like there's been an error fetching jokes: ${error}`;
    }
}
function printAJoke(joke) {
    parJoke.innerText = joke;
}
function saveJoke(text) {
    console.log("hola");
    if (!arrayJokes.some(data => data.joke === text)) {
        let newJoke = new Joke(text, 0, new Date().toISOString());
        arrayJokes.push(newJoke);
        console.log(newJoke);
    }
    else {
        console.log(arrayJokes.find(data => data.joke === text));
    }
}
function rate(value) {
    let currentJoke = arrayJokes[arrayJokes.length - 1];
    currentJoke.score += value;
}
//# sourceMappingURL=script.js.map