const { UNAUTHORIZED } = require("../utils/statusCodes");
const CustomAPIError = require("./custom-api");

class UnauthenticatedError extends CustomAPIError {
	constructor(message) {
		super(message);
		this.statusCode = UNAUTHORIZED;
	}
}

module.exports = UnauthenticatedError;
