const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PackageIndianOptionSchema = new Schema({
	package_id: {
		type: String,
		required: true,
	},
	category_id: {
		type: String,
	},
	/*adults: {
		type: String,
		required: true,
	},
	rooms: {
		type: String,
		required: true,
	},
	extra_beds: {
		type: String,
		default: 0,
	},
	no_of_kids: {
		type: String,
		required: true,
	},
	*/
	price: {
		type: Number,
		required: true,
	},
	extra_adult_price: {
		type: Number,
		required: true,
	},
	extra_child_price: {
		type: Number,
		required: true,
	},
	safari_price:{
        type: Number,
		required: true,
	},
	extra_bed_price :{
		type: Number,
		required: true,
	},
	festival_price: {
		type: String,
		required: true,
	},
	festival_kid: {
		type: String,
		required: true,
	}
},{
	timestamps: true
});

const PackageIndianOption = mongoose.model('package_indian_options', PackageIndianOptionSchema);
module.exports = PackageIndianOption;