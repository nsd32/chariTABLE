const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
