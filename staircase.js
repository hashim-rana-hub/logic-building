const staircase = (n) => {
	for (let i = n - 1; i > 0; i--) {
		for (let j = 1; j <= n - i; j++) {
			process.stdout.write(" *");
		}
		for (let k = i; k <= i; k++) {
			process.stdout.write("");
		}
		console.log();
	}
};

const staircaseRight = (n) => {
	for (let i = 0; i < n; i++) {
		for (let j = 1; j <= n - i; j++) {
			process.stdout.write(" *");
		}
		for (let k = i; k <= i; k++) {
			process.stdout.write("");
		}
		console.log();
	}
};

const diamond = (n) => {
	for (let i = n - 1; i > 0; i--) {
		for (let j = 1; j <= n - i; j++) {
			process.stdout.write(" *");
		}
		for (let k = i; k <= i; k++) {
			process.stdout.write("");
		}
		console.log();
	}
	for (let i = 0; i < n; i++) {
		for (let j = 1; j <= n - i; j++) {
			process.stdout.write(" *");
		}
		for (let k = i; k <= i; k++) {
			process.stdout.write("");
		}
		console.log();
	}
};
const trianle = (n) => {
	for (let i = 0; i < n; i++) {
		for (let j = 1; j <= n - i; j++) {
			process.stdout.write(" ");
		}
		for (let k = 1; k <= i; k++) {
			process.stdout.write("* ");
		}
		console.log();
	}
};

staircaseRight(8);
trianle(8);
staircase(8);
diamond(8);
