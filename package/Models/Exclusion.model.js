const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExclusionSchema = new Schema({
	exclusion: {
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

const Exclusion = mongoose.model('exclusions', ExclusionSchema);
module.exports = Exclusion;