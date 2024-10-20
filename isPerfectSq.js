function isPerfectSquare(num) {
	if (num < 0) return false;
	if (num >-1&& num<2) return true;
	for (let i = 2; i <= num; i++) {
		if (i * i === num) {
			return true;
		}
	}
	return false;
}

console.log(isPerfectSquare(25));
console.log(isPerfectSquare(24));
console.log(isPerfectSquare(0));
console.log(isPerfectSquare(1));
console.log(isPerfectSquare(-1));
console.log(isPerfectSquare(144));
