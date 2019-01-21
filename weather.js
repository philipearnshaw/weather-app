const BASE_DARKSKY_URL = 'https://api.darksky.net/forecast';
const DARKSKY_KEY = '36bd5707035ef34897ab7cacf2ea5444';	

var buildUrl = (latitude, longitude) => {
	return `${BASE_DARKSKY_URL}/${DARKSKY_KEY}/${latitude},${longitude}`;
}

var getWeatherFromResponse = (axiosResponse) => {
	
	return {
		temperature: 			axiosResponse.data.currently.temperature,
		apparentTemperature: 	axiosResponse.data.currently.apparentTemperature
	};
};

module.exports = {
		getWeatherFromResponse,
		buildUrl
};
