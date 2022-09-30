const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AmenitySchema = new Schema({
	amenity: {
		type: String,
		unique: true,
		required: true,
		index: true,
	},
	image: {
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

const Amenity = mongoose.model('amenities', AmenitySchema);
module.exports = Amenity;