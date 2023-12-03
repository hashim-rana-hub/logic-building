// const findDiagonalDifference = (matrix, n) => {
// 	let sum1 = 0,
// 		sum2 = 0;
// 	for (let i = 0; i < n; i++) {
// 		for (let j = 0; j < n; j++) {
// 			if (i == j) sum1 += matrix[i][j];
// 			if (i == n - j - 1) sum2 += matrix[i][j];
// 		}
// 	}
// 	return sum1 - sum2;
// };
const findDiagonalDifference = (matrix, n) => {
	let sum1 = 0,
		sum2 = 0;
	for (let i = 0; i < n; i++) {
		sum1 += matrix[i][i];
		sum2 += matrix[i][n - i - 1];
	}
	return sum1 - sum2;
};

console.log(
	findDiagonalDifference(
		[
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		],
		3
	)
);
