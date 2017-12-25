const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

let Schema = mongoose.Schema;

let UserSchema = new Schema({

	username: {
		type: String,
		required: true,
		unique: true,
		trim: true
	},

	companyName: {
		type: String,
		trim: true,
		required: true
	},

	email: {
		type: String,
		required: true,
		trim: true
	},

	password: {
		type:String,
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
	},

	website: {
		type:String,
		trim: true
	},

	events: [
		{
			type: Schema.Types.ObjectId,
	  	ref: "Event"
		}
	]

});

// authenticate imput against database documents
UserSchema.statics.authenticate = (loginUsername, loginPassword, callback) => {
	User.findOne({ username:loginUsername })
		.exec(function (error, user) {
			if(error) {
				return callback(error);
			} else if (!user) {
				var err = new Error('Company not found!!');
				err.status = 401
				return callback(err);
			}

			bcrypt.compare(loginPassword, user.password, (error, result) => {
				if(result  === true) {
					return callback(null, user);
				} else {
					return  callback();
				}
			})
		});
	}

// hash password before saving to database
UserSchema.pre('save', function(next) {
    var user = this;
    bcrypt.hash(user.password, 10, function(err, hash) {
        if(err) {
            return next(err);
        }
        user.password = hash;
        next();
    });


});

let User = mongoose.model('User', UserSchema);

module.exports = User;
