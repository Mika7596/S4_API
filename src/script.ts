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
    } catch (error) {
        console.error(error);
    }
}


// getWeather();

// {"location":
// {"city":"Barcelona","woeid":753692,"country":"Spain","lat":41.39917,"long":2.15397,"timezone_id":"Europe/Madrid"},
// "current_observation":{"pubDate":1742646942,"wind":{"chill":12,"direction":"SSW","speed":10},
// "atmosphere":{"humidity":91,"visibility":14.98,"pressure":1004.1},
// "astronomy":{"sunrise":"6:52 AM","sunset":"7:05 PM"},
// "condition":{"temperature":15,"text":"Cloudy","code":26}},
// "forecasts":[{"day":"Sat","date":1742659200,"high":15,"low":9,"text":"Mostly Cloudy","code":28},{"day":"Sun","date":1742745600,"high":15,"low":8,"text":"Showers","code":11},{"day":"Mon","date":1742832000,"high":16,"low":8,"text":"Partly Cloudy","code":30},{"day":"Tue","date":1742918400,"high":18,"low":9,"text":"Mostly Cloudy","code":28},{"day":"Wed","date":1743004800,"high":18,"low":9,"text":"Mostly Sunny","code":34},{"day":"Thu","date":1743091200,"high":19,"low":9,"text":"Mostly Sunny","code":34},{"day":"Fri","date":1743177600,"high":19,"low":9,"text":"Mostly Sunny","code":34},{"day":"Sat","date":1743264000,"high":18,"low":9,"text":"Showers","code":11},{"day":"Sun","date":1743350400,"high":18,"low":8,"text":"Partly Cloudy","code":30},{"day":"Mon","date":1743436800,"high":18,"low":9,"text":"Sunny","code":32},{"day":"Tue","date":1743523200,"high":18,"low":9,"text":"Partly Cloudy","code":30}]}

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
}

async function getAJoke() {
    
    try {
        const response = await fetch(urlFamilyJoke, optionsFamilyJoke);
        const result = await response.json();
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
// getAJoke();

async function getADadJoke() {
    try{
        const response = await fetch(urlDadJoke, optionsDadJoke);
        const result = await response.json();
        console.log(result.joke);
    } catch (error){
        console.log(error)
    }
}

getADadJoke();