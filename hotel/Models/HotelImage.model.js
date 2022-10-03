const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelImageSchema = new Schema({
	hotel_id: {
		type: String,
	},
	image: {
		type: String,
	},
	status: {
		type: Number,
	},
	hotel: { 
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'Hotel' 
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

const HotelImage = mongoose.model('HotelImage', HotelImageSchema,'hotel_images');
module.exports = HotelImage;