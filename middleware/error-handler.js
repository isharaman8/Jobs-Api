const {
	INTERNAL_SERVER_ERROR,
	BAD_REQUEST,
	NOT_FOUND,
} = require("../utils/statusCodes");
const errorHandlerMiddleware = (err, req, res, next) => {
	let customError = {
		statusCode: err.statusCode || INTERNAL_SERVER_ERROR,
		msg: err.message || "Something went wrong try again later",
	};

	if (err.name === "ValidationError") {
		customError.msg = Object.values(err.errors)
			.map((item) => item.message)
			.join(", ");

		customError.statusCode = BAD_REQUEST;
	}

	if (err.name === "CastError") {
		customError.msg = `No item found with id ${err.value}`;
		customError.statusCode = NOT_FOUND;
	}

	if (err.code && err.code === 11000) {
		customError.msg = `Duplicate value entered for ${Object.keys(
			err.keyValue
		)} field, please choose another value`;
		customError.statusCode = BAD_REQUEST;
	}

	// return res.status(INTERNAL_SERVER_ERROR).json(err);
	return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;
