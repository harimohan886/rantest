const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PackageForeignerOptionSchema = new Schema({
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
	},*/
	price: {
		type: Number,
		
	},
	extra_adult_price: {
		type: Number,
		
	},
	extra_child_price: {
		type: Number,
		
	},
	safari_price:{
        type: Number,
		
	},
	extra_bed_price :{
		type: Number,
		
	},
	festival_price: {
		type: Number,
		
	},
	festival_kid: {
		type: Number,
		
	}
},{
	timestamps: true
});

const PackageForeignerOption = mongoose.model('package_foreigner_options', PackageForeignerOptionSchema);
module.exports = PackageForeignerOption;