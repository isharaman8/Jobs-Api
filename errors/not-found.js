const { NOT_FOUND } = require("../utils/statusCodes");
const CustomAPIError = require("./custom-api");

class NotFoundError extends CustomAPIError {
	constructor(message) {
		super(message);
		this.statusCode = NOT_FOUND;
	}
}

module.exports = NotFoundError;
