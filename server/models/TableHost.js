const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let TableHostSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: true
	},

	email: {
		type: String,
		trim: true,
		required: true
	},

	guests: [
		{
			type: Schema.Types.ObjectId,
	    ref: "Guest"
    }
	]
});

let TableHost = mongoose.model('TableHost', TableHostSchema);

module.exports = TableHost;