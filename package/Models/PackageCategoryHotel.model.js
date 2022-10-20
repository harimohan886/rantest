const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PackageCategoryHotelSchema = new Schema({
	category_id: {
		type: String,
	},
	package_id: {
		type: String,
		required: true,
	},
	hotel_id: {
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

const PackageCategoryHotel = mongoose.model('package_category_hotels', PackageCategoryHotelSchema);
module.exports = PackageCategoryHotel;