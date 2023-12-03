const simpleArraySum = (arr) => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	console.log(sum);
};

simpleArraySum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
