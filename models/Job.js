const { Schema, model } = require("mongoose");

const jobSchema = new Schema(
	{
		company: {
			type: String,
			required: [true, "Please provide company name"],
			maxlength: 50,
		},
		position: {
			type: String,
			required: [true, "Please provide prosition"],
			maxlength: 100,
		},
		status: {
			type: String,
			enum: ["interview", "declined", "pending"],
			default: "pending",
		},
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: [true, "Please provide user"],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = model("Job", jobSchema);
