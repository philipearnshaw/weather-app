
var getUser = (id, callback) => {
	var user = {
		id: id,
		name: 'Phil'
	};
	
	setTimeout(() => {
		callback(user);
	}, 2000);
};

getUser(31, (user) => {
	console.log(user);
});
// http://maps.googleapis.com/maps/api/geocode/json?address=1301 lombard street philadelphia