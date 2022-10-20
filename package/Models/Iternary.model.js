const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IternarySchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	status: {
		type: String,
		default: 0,
	},
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		required: false,
	},
	updatedBy: {
		type: mongoose.Schema.Types.ObjectId,
		required: false,
	}
});

const Iternary = mongoose.model('iternaries', IternarySchema);
module.exports = Iternary;