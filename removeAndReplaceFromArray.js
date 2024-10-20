// with new array
function removeReplaceWithNewArray(arr, val) {
	let temp = [],
		occurance = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== val) {
			temp.push(arr[i]);
		} else occurance += 1;
	}
	for (let i = 0; i < occurance; i++) {
		temp = [...temp, `_`];
	}
	return { occurance, temp };
}

//manipulating original arry
function removeReplace(arr, val) {
	let occurance = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == val) {
			arr[i] = "_";
			occurance += 1;
		}
	}

	return { occurance, arr };
}
// console.log(removeReplaceWithNewArray([3, 2, 2, 3], 3));
console.log(removeReplace([2, 2, 2, 2], 3));
