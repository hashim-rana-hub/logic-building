const findMinMaxSum = (arr) => {
	let sum1 = 0,
		sum2 = 0;
	for (let i = 0; i < arr.length; i++) {
		if (i <= arr.length - 2) sum1 += arr[i];
		if (i > 0 && i <= arr.length - 1) sum2 += arr[i];
	}
	let minSum = Math.min(sum1, sum2),
		maxSum = Math.max(sum1, sum2);
	return { minSum, maxSum };
};

console.log(findMinMaxSum([1, 3, 5, 7, 9]));
