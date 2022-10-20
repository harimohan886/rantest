const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PackageExclusionSchema = new Schema({
	exclusion: {
		type: String,
		required: true,
	},
	package_id: {
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

const PackageExclusion = mongoose.model('package_exclusions', PackageExclusionSchema);
module.exports = PackageExclusion;