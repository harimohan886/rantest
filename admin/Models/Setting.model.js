const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SettingSchema = new Schema({
	type: {
		type: String
	},
	value:{
		type:Object
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

const Setting = mongoose.model('settings', SettingSchema);
module.exports = Setting;