const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TermSchema = new Schema({
	term: {
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

const Term = mongoose.model('terms', TermSchema);
module.exports = Term;