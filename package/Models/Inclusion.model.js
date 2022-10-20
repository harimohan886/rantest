const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InclusionSchema = new Schema({
	inclusion: {
		type: String,
		required: true,
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

const Inclusion = mongoose.model('inclusions', InclusionSchema);
module.exports = Inclusion;