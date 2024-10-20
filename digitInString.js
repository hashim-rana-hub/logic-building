const calDigit = (str) => {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] >= "0" && str[i] <= "9") count++;
	}
	console.log(`total dig in ${str} are ${count}`);
};

calDigit("023hashim129");
