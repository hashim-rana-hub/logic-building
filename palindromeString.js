const palindrome = (str) => {
	let reverse = "";
	for (let i = str.length - 1; i >= 0; i--) reverse = reverse + str[i];
	if (str == reverse) {
		console.log(`${str} is palindrome`);
	} else console.log("not a palindrome");
};

palindrome("madam");
