const { BAD_REQUEST } = require("../utils/statusCodes");
const CustomAPIError = require("./custom-api");

class BadRequestError extends CustomAPIError {
	constructor(message) {
		super(message);
		this.statusCode = BAD_REQUEST;
	}
}

module.exports = BadRequestError;
