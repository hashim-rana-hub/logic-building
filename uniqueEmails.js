var numUniqueEmails = function (emails) {
	// let filtered = emails.filter((email) => !email.includes("+"));
	// if (filtered.every((email) => email.includes("@"))) {
	// 	return filtered;
	// }
	let unique = new Set();
	emails.forEach((email) => {
		let [local, domain] = email.split("@");
		local = local.split("+")[0].replace(/\./g, "");
		console.log(local, domain);
		unique.add(local + "@" + domain);
	});

	return [...unique];
};

console.log(
	numUniqueEmails([
		"test.email+alex@leetcode.com",
		"test.e.mail+bob.cathy@leetcode.com",
		"testemail+david@lee.tcode.com",
	])
);
