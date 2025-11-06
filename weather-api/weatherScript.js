// the weather API 
const url = "https://api.weather.gov/gridpoints/GRR/82,39/"
const forecast = "https://api.weather.gov/gridpoints/GRR/82,39/forecast"
const hourly = "https://api.weather.gov/gridpoints/GRR/82,39/forecast/hourly"

// the html container
const container = document.querySelector(".container");


doTheWholeThing();

async function doTheWholeThing() {

	const data = await getData();
	console.log(data);

	const result = processData(data);
	
	
	console.log(result);
	container.innerHTML = result;
}



async function getData() {
	const response = await fetch(hourly);
	if (!response.ok) {
		throw new Error(`An error has occured: ${response.status}`)
	}
	const json = await response.json();
	return json; 
}



function processData(dataArray) {
	return(dataArray);
}
