const compare = (array1, array2) => {
	let alice = 0,
		bob = 0;
	if (array1.length === array2.length) {
		for (let i = 0; i < array1.length; i++) {
			if (array1[i] < array2[i]) {
				bob += 1;
				console.log("bob is awarded", bob);
			} else if (array1[i] > array2[i]) {
				alice += 1;
				console.log("alice is awarded", alice);
			} else console.log("no on is awarded");
		}
		return [alice, bob];
	} else console.log("cant compare");
};

console.log(compare([5, 7, 7], [3, 6, 10]));
