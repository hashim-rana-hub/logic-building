function getFibonacciSeries(n) {
	const series = [0, 1];
	let next;
	for (let i = 2; i < n; i++) {
		next = series[i - 1] + series[i - 2];
		series.push(next);
	}
	console.log(series);
}
getFibonacciSeries(10);
