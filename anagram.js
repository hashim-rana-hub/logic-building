const checkAnagram = (str1, str2) => {
	if (str1.lenght !== str2.lenght) console.log("not anagram");
	const lowerCase1 = str1.toLowerCase();
	const lowerCase2 = str2.toLowerCase();
	const sort1 = lowerCase1.split(" ").sort();
	const sort2 = lowerCase2.split(" ").sort();
	console.log(sort1, sort2);
	if (sort1 == sort2) console.log("both are anagram of each other");
};

checkAnagram("hello", "olleH");
