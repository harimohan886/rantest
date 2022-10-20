const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentPolicySchema = new Schema({
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

const PaymentPolicy = mongoose.model('payment_policies', PaymentPolicySchema);
module.exports = PaymentPolicy;