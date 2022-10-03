const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelRoomSchema = new Schema({
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

const HotelRoom = mongoose.model('hotel_rooms', HotelRoomSchema);
module.exports = HotelRoom;