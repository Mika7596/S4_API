const divWeather = <HTMLDivElement>document.getElementById("divWeather");

divWeather.innerHTML = "Holaaa"

function getAJoke(): void{
    fetch('https://icanhazdadjoke.com/').then(response => console.log(response))
}

getAJoke();

const chuckNorrisUrl = 'https://api.chucknorris.io/jokes/random';
async function fetchRandomJoke() {
   try {
      const response = await fetch(chuckNorrisUrl);
      const data = await response.json();
      const joke = data.value;
      console.log("Joke of the day: ", joke);
   } catch (error) {
      console.error('Error fetching joke:', error); 
   }
}
fetchRandomJoke();