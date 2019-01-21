
var asyncAdd = (a, b) => {
	
	return new Promise((resolve, reject) => {
		
		setTimeout(() => {
			if (typeof a === 'number' && typeof b === 'number') {
				resolve(a + b);
			} else {
				reject('Both arguments must be numbers');
			}
		}, 1500);
	});
};

//asyncAdd(5, 'a').then((result) => {
//	console.log('Result: ', result);
//	return asyncAdd(result, 33);  // Returning another promise.
//}, (errorMessage) => {
//	console.log(errorMessage);
//}).then((result) => {				// Chained promise
//	console.log('Result: ', result)
//}, (errorMessage) => {
//	console.log(errorMessage);
//});

asyncAdd(5, 'a').then((result) => {			// This now prints one message.
	console.log('Result: ', result);
	return asyncAdd(result, 33); 
}).then((result) => {			
	console.log('Result: ', result)
}).catch((errorMessage) => {
	console.log(errorMessage);
});


//var somePromise = new Promise((resolve, reject) => {  // (resolve, reject) allows us the manage the state of our promise
//	
//	setTimeout(() => {
//		//resolve('Hey. It worked!');
//		//reject('Unable to fulfill promise');
//	}, 2500);
//});
//
//somePromise.then((message) => {  // Only gets called when the promise is fulfilled.
//	console.log('Success: ', message);
//}, (errorMessage) => {			// Only gets called when the promise is rejected.
//	console.log('Error: ', errorMessage);
//}); 


console.log('----------------');