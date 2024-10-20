const countTallestCandles = (array) => {
	let total = 0,
		max = 0;
	for (let i = 0; i < array.length; i++) {
		let num = array[i];
		if (num > max) {
			max = num;
			total = 1;
		} else if (max == num) total++;
	}
	return total;
};
console.log(countTallestCandles([4, 2, 4, 1]));
