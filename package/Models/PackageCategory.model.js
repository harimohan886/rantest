const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PackageCategorySchema = new Schema({
	category: {
		type: String,
		required: true,
	},
	package_id: {
		type: String,
		required: true,
	},
	hotels:[{
		type: mongoose.Schema.Types.ObjectId,
		ref: "package_category_hotels"
	}],
	foreignerOptions:[{
		type: mongoose.Schema.Types.ObjectId,
		ref: "package_foreigner_options"
	}],
	indianOptions:[{
		type: mongoose.Schema.Types.ObjectId,
		ref: "package_indian_options"
	}],
	status: {
		type: Number,
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

const PackageCategory = mongoose.model('package_categories', PackageCategorySchema);
module.exports = PackageCategory;