const divWeather = <HTMLElement> document.getElementById('divWeather');
const parTemp = <HTMLElement> document.getElementById('parTemp');
const parCity = <HTMLElement> document.getElementById("parCity");
const divJoke = <HTMLElement> document.getElementById("divJoke");

window.addEventListener('load', () => {
    //getWeather();
    fetchAJoke();
}
);

// ----------------------------------Weather ------------------------------------

const urlWeather = 'https://yahoo-weather5.p.rapidapi.com/weather?location=Barcelona&format=json&u=c';
const optionsWeather = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '9d6679a56bmshe7aac32a188b522p181bd4jsnb2ed9881b884',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
};

//--------------Alternative weather API
// const url = 'https://weather-api138.p.rapidapi.com/weather?city_name=Barcelona';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '9d6679a56bmshe7aac32a188b522p181bd4jsnb2ed9881b884',
// 		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

async function getWeather() {
    
    try {
        const response = await fetch(urlWeather, optionsWeather);
        const result = await response.json();
        console.log(result.current_observation.condition.temperature);
        console.log(result.current_observation.condition.text);
        console.log(result.location.city);
        printWeather(result);
        
    } catch (error) {
        divWeather.innerText = `Seems like we cannot get weather information right now: ${error}`;
    }
}

function printWeather (result: any){
    const spanTemp = document.createElement('span');
    spanTemp.innerText = result.current_observation.condition.temperature;

    const spanText = document.createElement("span");
    spanText.innerText = result.current_observation.condition.text;

    parCity.innerText = result.location.city;
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

// Functions to fetch a random joke and to display it on DOM

async function fetchAJoke(){
    
    let randomNumber: number = Math.ceil(Math.random()*10);
    try{
        if (randomNumber % 3 === 0){
            const response = await fetch(urlFamilyJoke, optionsFamilyJoke);
            const result = await response.json();
            printAJoke(result.data);
        } if (randomNumber % 3 === 1){
            const response = await fetch(urlDadJoke, optionsDadJoke);
            const result = await response.json();
            printAJoke(result.joke)
        } else{
            const response = await fetch(urlChuckNorris);
            const result = await response.json();
            printAJoke(result.value);
        }
    } catch (error){
        return `Oops! Seems like there's been an error fetching jokes: ${error}`
    }
}

function printAJoke(joke: string){
    divJoke.innerHTML = joke;
}