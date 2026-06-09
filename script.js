//your JS code here. If required.
let output = document.getElementById("output");

new Promise((resolve) => {
	setTimeout(() => {
		resolve([1,2,3,4]);
	}, 3000)
})
.then((arr) => {
	let evenNumbers = arr.filter((item) => item%2 === 0);
	return new Promise((resolve) => {
		setTimeout(() => {
			output.textContent = evenNumbers.join(",");
			resolve(evenNumbers);
		}, 1000);
	});
})
.then((evenNumbers) => {
	let doubledNumbers = evenNumbers.map((item) => item*2);
	return new Promise((resolve) => {
		setTimeout(() => {
			output.textContent = doubledNumbers.join(",");
			resolve(doubledNumbers);
		}, 2000);
	});
});
      
