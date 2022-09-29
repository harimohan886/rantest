const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DisableDateSchema = new Schema({
	date: {
		type: String,
		index: true,
	},
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		required: false,
	},
	updatedBy: {
		type: mongoose.Schema.Types.ObjectId,
		required: false,
	},
});

const DisableDate = mongoose.model('disable_dates', DisableDateSchema);
module.exports = DisableDate;