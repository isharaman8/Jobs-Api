const User = require("../models/User");
const jwt = require("jsonwebtoken");

const { UnauthenticatedError } = require("../errors");

const auth = (req, res, next) => {
	// Check Header
	const authHeader = req.headers?.authorization;
	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		throw new UnauthenticatedError("Please provide valid auth token");
	}

	const token = authHeader.split(" ")[1];

	try {
		const payload = jwt.verify(token, process.env.JWT_SECRET);
		// Attach to job routes
		req.user = { userId: payload.userId, name: payload.name };
		next();
	} catch (error) {
		console.log(error);
		throw new UnauthenticatedError("Please provide valid auth token");
	}
};

module.exports = auth;
