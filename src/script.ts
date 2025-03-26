const divWeather = <HTMLElement> document.getElementById('divWeather');
const parHour = <HTMLElement> document.getElementById("parHour");
const parDate = <HTMLElement> document.getElementById("parDate");
const parTemp = <HTMLElement> document.getElementById('parTemp');
const parDescription = <HTMLElement> document.getElementById("description");
const parCity = <HTMLElement> document.getElementById("parCity");
const parJoke = <HTMLElement> document.getElementById("parJoke");
const ratingMsg = <HTMLElement> document.getElementById("ratingText");

window.addEventListener('load', () => {
    displayHour();
    displayDate();
    getWeather();
    //fetchAJoke();
}
);

function displayHour(){
    let time = new Date();
    let hour = time.getHours().toString();
    let min = time.getMinutes().toString();
    let sec = time.getSeconds().toString();
    hour = Number(hour) < 10 ? "0" + hour : hour;
    min = Number(min) < 10 ? "0" + min : min;
    sec = Number(sec) < 10 ? "0" + sec : sec;

    try{
        parHour.innerText = `${hour}:${min}:${sec}`
    } catch{
        parHour.innerText = "Cannot display the hour at the moment."
    }
}
setInterval(displayHour, 1000);

function displayDate(){
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();
    try{
        parDate.innerText = `${year}/${month}/${day}`

    }catch{
        parDate.textContent = "Cannot show the date right now."
    }
}
setInterval(displayDate, 3600000);

// ----------------------------------Weather -------------------------------

const urlWeather = 'https://yahoo-weather5.p.rapidapi.com/weather?location=Barcelona&format=json&u=c';
const optionsWeather = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '9d6679a56bmshe7aac32a188b522p181bd4jsnb2ed9881b884',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
};
const alternativeWeather = "https://www.el-tiempo.net/api/json/v2/home";

async function getWeather() {
    try{
        try{
            const response = await fetch(urlWeather, optionsWeather);
            const result = await response.json();
             printWeather(result.current_observation.condition.temperature, result.current_observation.condition.text);
        }catch{
            const response = await fetch(alternativeWeather);
            const data = await response.json();
            console.log(data);
            printWeather(data.ciudades[0].temperatures.max, data.ciudades[0].stateSky.description);
        }
    }catch(error){
        parCity.innerText = `Seems like we cannot get weather information right now: ${error}`;
    }
}

function printWeather (temperature: string, description: string){
    parTemp.textContent = `${temperature}º`;
    parDescription.innerText = description;
}



// ------------------------------------------JOKES------------------------------------------//
// Urls & headers to fetch 3 joke APIs
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

// Defining an array where the displayed jokes will be kept
const arrayJokes:{joke:string, score: number, date:string}[] = [];

class Joke{
    constructor(public joke:string, public score: number, public date: string){
    }
}

// Functions to fetch a random joke and to display it on DOM

async function fetchAJoke(){
    
    let randomNumber: number = Math.ceil(Math.random()*10);
    let text: string = "";

    ratingMsg.style.display = "none";

    try{
        if (randomNumber % 3 === 0){
            const response = await fetch(urlFamilyJoke, optionsFamilyJoke);
            const result = await response.json();
            text = result.data;    
        } if (randomNumber % 3 === 1){
            const response = await fetch(urlDadJoke, optionsDadJoke);
            const result = await response.json();
            text = result.joke;    
        } else{
            const response = await fetch(urlChuckNorris);
            const result = await response.json();
            text = result.value;
        }
        printAJoke(text);
        saveJoke(text);

    } catch (error){
        return `Oops! Seems like there's been an error fetching jokes: ${error}`
    }
}

function printAJoke(joke: string){
    parJoke.innerText = joke;
    
}
function saveJoke(text: string){
    if(!arrayJokes.some(data => data.joke === text)){
        let newJoke = new Joke(text, 0, new Date().toISOString());
            arrayJokes.push(newJoke);
            console.log(newJoke);
    } else{
        console.log(arrayJokes.find(data => data.joke === text));
    }
}

function rate(value: number){
    let currentJoke = arrayJokes[arrayJokes.length-1];
    currentJoke.score += value;
    ratingMsg.style.display = "block";
}