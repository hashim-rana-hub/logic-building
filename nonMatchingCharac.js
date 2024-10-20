const nonMatchingChracters = (str, alphabet) => {
	let nonMatched = "";
	for (let i = 0; i < str.length; i++) {
		if (str[i].toLowerCase() !== alphabet.toLowerCase()) nonMatched += str[i];
	}
	console.log(nonMatched);
};

nonMatchingChracters("hashim", "m");
