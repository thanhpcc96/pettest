const crypto = require("crypto");
exports.hash = password => {
	const sum = crypto.createHash("sha256");
	sum.update(password + process.env.SECRET_KEY);
	return sum.digest("hex");
};
