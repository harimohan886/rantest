const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CancellationPolicySchema = new Schema({
	policy: {
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

const CancellationPolicy = mongoose.model('cancellation_policies', CancellationPolicySchema);
module.exports = CancellationPolicy;