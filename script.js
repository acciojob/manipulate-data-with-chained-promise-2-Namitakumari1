//your JS code here. If required.
let array = [1,2,3,4];

let outputDiv = document.getElementById("output");

let promise = new Promise((resolve) => {
	setTimeout(() => {
		resolve(array);
	}, 3000)
	
})
promise.then((array) => {
	return new Promise((resolve) => {
		let evenNumbers = array.filter((item) => item%2 === 0);
		setTimeout(() => {
			outputDiv.textContent = evenNumbers;
			resolve(evenNumbers);
		}, 1000);
	})
})
.then((evenNumbers) => {
	return new Promise((resolve) => {
	let doubledNumbers = evenNumbers.map((item) => item*2);
	setTimeout(() => {
		outputDiv.textContent = doubledNumbers;
		resolve(doubledNumbers);
	}, 2000);
	})
})
      
