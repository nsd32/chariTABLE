const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let GuestSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: true
	},

	email: {
		type: String,
		trim: true,
		required: true
	}
});

let Guest = mongoose.model('Guest', GuestSchema);

module.exports = Guest;