
const BASE_GEOCODE_URL = 'https://maps.googleapis.com/maps/api/geocode/json';
const GEOCODE_KEY = 'AIzaSyBaC92lAMQp0u36kJf0FN2kGkq0AjfJspQ';

var buildUrl = (encodedAddress) => {
	return `${BASE_GEOCODE_URL}?address=${encodedAddress}&key=${GEOCODE_KEY}`;
}

var getLocationFromResponse = (axiosResponse) => {
	
	if (axiosResponse.data.status === 'ZERO_RESULTS') {
		throw new Error('Unable to find address.');
	}
	
	return {
			formatted_address:	axiosResponse.data.results[0].formatted_address,
			latitude: 			axiosResponse.data.results[0].geometry.location.lat,
			longitude: 			axiosResponse.data.results[0].geometry.location.lng
	};
};

module.exports = {
		getLocationFromResponse,
		buildUrl
};
