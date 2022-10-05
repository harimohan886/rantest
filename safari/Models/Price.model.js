const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PriceSchema = new Schema({
	name: {
		type: String,
		index: true,
	},
	date_from: {
		type: String,
	},
	date_to: {
		type: String,
	},
	type: {
		type: String,
	},
	price: {
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

const Price = mongoose.model('price', PriceSchema);
module.exports = Price;