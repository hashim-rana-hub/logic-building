const reverse = (str) => {
	let alphabet = "";
	for (let i = str.length - 1; i >= 0; i--) {
		alphabet = alphabet + str[i];
	}
	console.log(alphabet);
};

reverse("Hello");
const str = "world";
console.log(str.split("").reverse().join(""));
