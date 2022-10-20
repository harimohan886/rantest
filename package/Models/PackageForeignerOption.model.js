const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PackageForeignerOptionSchema = new Schema({
	package_id: {
		type: String,
		required: true,
	},
	category_id: {
		type: String,
	},
	adults: {
		type: String,
		required: true,
	},
	rooms: {
		type: String,
		required: true,
	},
	extra_beds: {
		type: String,
		default: 0,
	},
	no_of_kids: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	kid: {
		type: String,
		required: true,
	},
	festival_price: {
		type: String,
		required: true,
	},
	festival_kid: {
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

const PackageForeignerOption = mongoose.model('package_foreigner_options', PackageForeignerOptionSchema);
module.exports = PackageForeignerOption;