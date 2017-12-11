const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let CompanySchema = new Schema({
	companyName: {
		type: String,
		trim: true,
		required: true
	},

	addressLine1: {
		type: String,
		trim: true,

	},

	addressLine2: {
			type: String,
			trim: true,

		},
	city: {
		type: String,
		trim: true
	},

	state: {
		type:String,
		trim: true
	},

	zipCode: {
		type:Number,
		trim: true
	},

	phoneNumber: {
		type: String,
		trim: true
        // validate: {
        //     validator: function(v) {
        //         return /d{10}/.test(v);
        //     },
        //     message: '{VALUE} is not a valid 10 digit number!'
        // }
	},

	website: {
		type:String,
		trim: true
	}
});

let Company = mongoose.model('Company', CompanySchema);

module.exports = Company;
