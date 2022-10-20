const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PackageInclusionSchema = new Schema({
	inclusion: {
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

const PackageInclusion = mongoose.model('package_inclusions', PackageInclusionSchema);
module.exports = PackageInclusion;