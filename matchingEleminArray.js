const calculateElem = (arr, num) => {
	let count = 0;
	(tallest = 0), (sortedArray = []);
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == num) count++;
	}

	arr.sort();
	for (let i = 0; i < arr.length; i++)
		if (arr[i] < arr[i + 1]) tallest = arr[i + 1];
	console.log("tallest ", tallest);
	console.log(`${num} occurs ${count} time`);
	console.log(`sorted array`, arr);
};

calculateElem([55, 1, 2, 3, 3, 3, 4], 3);
