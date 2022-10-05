const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthSchema = new Schema({
	name: {
		type: String,
		required: [true, "fullname required!"],
		index: true,
	},
	username: {
		type: String,
		required: [true, "username required!"],
		unique: [true, "duplicate username!"]
	},
	email: {
		type: String,
		required: [true, "email required!"],
		unique: [true, "email already exists in databases!"],
		lowercase: true,
		trim: true,
		validate: {
			validator: function (v) {
				return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
			},
			message: '{VALUE} is not a valid email!'
		}
	},
	password: {
		type: String,
		required: [true, "password required!"],
	},
	tokens:[{
        token:{
            type:String,
            required: true
        }
    }],
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		required: false,
	},
	updatedBy: {
		type: mongoose.Schema.Types.ObjectId,
		required: false,
	},
});

const Auth = mongoose.model('admins', AuthSchema);
module.exports = Auth;