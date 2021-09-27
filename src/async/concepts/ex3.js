const exPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		// resolve('function ran');
		reject('error message');
	}, 3000);
});

exPromise.then(
	() => {
		console.log('promise resolved!');
	},
	() => {
		console.log('promise rejected!');
	}
);

export { exPromise };
