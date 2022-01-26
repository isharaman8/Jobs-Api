const { NOT_FOUND } = require("../utils/statusCodes");
const notFound = (req, res) =>
	res.status(NOT_FOUND).send("Route does not exist");

module.exports = notFound;
