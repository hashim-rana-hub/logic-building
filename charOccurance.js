const findOccurance = (str, chracter) => {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === chracter.toLowerCase()) count++;
	}
	console.log(`${chracter} occurs ${count} times in ${str}`);
};

findOccurance("hashim shakoor", "O");
