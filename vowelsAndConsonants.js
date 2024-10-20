const calculate = (str) => {
	let vowels = ["a", "e", "i", "o", "u"],
		vowelsCount = 0,
		consonantsCount = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === " ") {
			continue;
		}
		if (vowels.includes(str[i])) vowelsCount++;
		else consonantsCount++;
	}

	console.log("vowels ", vowelsCount, " consonats ", consonantsCount);
};

calculate("i am a boy");
