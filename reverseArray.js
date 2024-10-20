const reverse = (arr) => {
	revArr = [];
	for (let i = arr.length - 1; i >= 0; i--) revArr.push(arr[i]);
	console.log(revArr);
};

reverse([1, 2, 3, 4, 5, 6, 7, 8]);
