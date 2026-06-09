//your JS code here. If required.
const output = document.getElementById("output");

new Promise((resolve) => {
	setTimeout(() => {
		resolve([1,2,3,4]);
	}, 3000)
})
.then((arr) => {
	const evenNumbers = arr.filter((num) => num%2 === 0);
	return new Promise((resolve) => {
		setTimeout(() => {
			output.textContent = evenNumbers.join(",");
			resolve(evenNumbers);
		}, 1000);
	});
})
.then((evenNumbers) => {
	const doubledNumbers = evenNumbers.map((num) => num*2);
	return new Promise((resolve) => {
		setTimeout(() => {
			output.textContent = doubledNumbers.join(",");
			resolve(doubledNumbers);
		}, 2000);
	});
});
      
