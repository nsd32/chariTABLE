const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UserSchema = new Schema({
	firstName: {
		type: String,
		trim: true,
		required: true
	},

	lastName: {
		type: String,
		trim: true,
		required: true
	},

	email: {
		type: String,
		required: true,
		unique: true,
		trim: true
	},

	password: {
		type:String,
		required: true
	},

	passwordConfirm: {
		type:String,
		required: true
	}
});

let User = mongoose.model('User', UserSchema);

module.exports = User;
