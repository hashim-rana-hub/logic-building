function repeatingCharacters(str) {
	let charcCount = {},
		repeatedArray = [];

	for (let char of str) {
		if (charcCount[char]) charcCount[char]++;
		else charcCount[char] = 1;
	}
	for (let char in charcCount) {
		if (charcCount[char] > 1) repeatedArray.push(char);
	}

	return repeatedArray;
}

console.log(repeatingCharacters("bbbaaaba"));
console.log(repeatingCharacters("aaabbbba"));
