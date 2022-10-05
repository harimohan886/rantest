const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelRoomFacilitySchema = new Schema({
	hotel_id: {
		type: String,
	},
	room_id: {
		type: String,
	},
	facility: {
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

const HotelRoomFacility = mongoose.model('hotel_room_facilities', HotelRoomFacilitySchema);
module.exports = HotelRoomFacility;