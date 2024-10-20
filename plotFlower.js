const plotFlower = (arr, n) => {
	if (!n) return true;
	for (let i = 0; i < arr.length; i++) {
		if (
			arr[i] == 0 &&
			(arr[i - 1] == 0 || arr[i - 1] == undefined) &&
			(arr[i + 1] == 0 || arr[i + 1] == undefined)
		) {
			n--;
			arr[i] = 1;
		}
		if (!n) return true;
	}
	return !n;
};

console.log(plotFlower([1, 0, 0, 0, 1], 0));
