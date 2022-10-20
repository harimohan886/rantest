const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
	category: {
		type: String,
		required: true,
	},
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		required: false,
	},
	updatedBy: {
		type: mongoose.Schema.Types.ObjectId,
		required: false,
	}
});

const Category = mongoose.model('categories', CategorySchema);
module.exports = Category;