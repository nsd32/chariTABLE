const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let SponsorSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: true
	},

	logo: {
		type: String,
		trim: true,
	}
});

let Sponsor = mongoose.model('Sponsor', SponsorSchema);

module.exports = Sponsor;