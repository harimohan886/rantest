const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SafariBookingSchema = new Schema({
	date: {
		type: String,
		required: [true, "date required!"],
		index: true,
	},
	zone: {
		type: String,
		required: [true, "zone required!"],
	},
	vehicle: {
		type: String,
		required: [true, "vehicle required!"],
	},
	timing: {
		type: String,
		required: [true, "timing required!"],
	},
	amount: {
		type: String,
		required: [true, "amount required!"],
	},
	transaction_id: {
		type: String,
	},
	status: {
		type: String,
	}
},{
	timestamps:true
});

const SafariBooking = mongoose.model('safari_bookings', SafariBookingSchema);
module.exports = SafariBooking;