console.log('Starting app');

setTimeout(() => {
	console.log('Callback function');
}, 2000);  // provided by Node - first param is a callback second is num ms to wait.


setTimeout(() => {
	console.log('Callback function number 2');
}, 0);  

console.log('Finishing app');