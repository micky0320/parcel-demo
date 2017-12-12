const promise = new Promise((res) => res(12))

promise.then((value) => {
	console.log('value:' + value);
	return value;
}).then((value) => {
	let val = value + 1;
	console.log('val:' + val);
}).catch((err) => {
	console.log('err:' + err);
});

Object.assign({},{name: 'yoyo'})