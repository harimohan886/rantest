const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PackageBookingSchema = new Schema({
	date: {
		type: String,
		required: [true, "date required!"],
		index: true,
	},
	package_id: {
		type: String,
		required: [true, "Package Id required!"],
	},
	timing: {
		type: String,
		required: [true, "timing required!"],
	},
	package_option_nationality: {
		type: String,
		required: [true, "nationality type required!"],
	},
	package_option_id: {
		type: String,
		required: [true, "option id required!"],
	},
	no_of_kids: {
		type: String,
		required: [true, "no of kids required!"],
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

const PackageBooking = mongoose.model('package_bookings', PackageBookingSchema);
module.exports = PackageBooking;