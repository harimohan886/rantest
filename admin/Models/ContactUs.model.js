const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactUsSchema = new Schema({
	name: {
		type: String
	},
	mobile: {
		type: String
	},
	email: {
		type: String
	},
	message: {
		type: String
	},
	addedAt: {
		type: String
	}
},

	{ timestamps: true });

const ContactUs = mongoose.model('contact_us', ContactUsSchema);
module.exports = ContactUs;