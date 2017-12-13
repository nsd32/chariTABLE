const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
	},

	email: {
		type: String,
		required: true,
		unique: true,
		trim: true
	},

	username: {
		type: String,
		required: true,
		unique: true,
		trim: true
	},

	password: {
		type:String,
		required: true
	}
});

// hash password before saving to database
CompanySchema.pre('save', function(next) {
    var user = this;
    bcrypt.hash(user.password, 10, function(err, hash) {
        if(err) {
            return next(err);
        }
        user.password = hash;
        next();
    });

	// users: [
	// 	{
  //   	user: {
	// 			type: Schema.Types.ObjectId,
  //   		ref: "User"
	// 		}
  // 	}
	// ]
});

let Company = mongoose.model('Company', CompanySchema);

module.exports = Company;
