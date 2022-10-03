const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelAmenitySchema = new Schema({
	hotel_id: {
		type: String,
	},
	amenity_id: {
		type: String,
	},
	status: {
		type: Number,
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

const HotelAmenity = mongoose.model('hotel_amenities', HotelAmenitySchema);
module.exports = HotelAmenity;