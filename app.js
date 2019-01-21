const yargs = require('yargs');
const axios = require('axios');

const geocode = require('./geocode');
const weather = require('./weather');

const argv = yargs
			.options({
				address: {
					demand:true,
					alias: 'a',
					describe: 'Address to fetch weather for',
					string: true 
				}
			})
			.help()
			.alias('help', 'h')
			.argv;

var geocodeUrl = geocode.buildUrl(encodeURIComponent(argv.address));

axios.get(geocodeUrl)
.then((locationResponse) => {
	
	var location = geocode.getLocationFromResponse(locationResponse);
	console.log(location.formatted_address);	
	
	var weatherUrl = weather.buildUrl(location.latitude, location.longitude);
	return axios.get(weatherUrl);
})
.then((weatherResponse) => {
	var weatherInfo = weather.getWeatherFromResponse(weatherResponse);
	console.log(`It's currently ${weatherInfo.temperature}. It feels like ${weatherInfo.apparentTemperature}`);
})
.catch((e) => {
	if (e.code === 'ENOTFOUND') {
		console.log('Unable to connect to API servers');
	} else {
		console.log(e.message);
	}
});

