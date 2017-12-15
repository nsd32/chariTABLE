const mongoose = require('mongoose');
const TableHost = require('./TableHost');

let Schema = mongoose.Schema;

let EventSchema = new Schema({
	eventName: {
		type: String,
		trim: true,
		required: true
	},

	eventLocation: {
		type: String,
		trim: true,
		required: true
	},

	eventDate: {
		type: String,
		required: true,
		trim: true
	},

	eventTime: {
		type:String,
		required: true
	},

	contactName: {
		type:String,
		required: true
	},

	contactPhone: {
		type:String,
		required: true
	},

	contactEmail: {
		type:String,
		required: true
	},

	numberOfTables: {
		type:Number,
		required: true
	},

	numberOfTableHosts: {
		type:Number,
		required: true
	},

	numberOfGuestsPerTable: {
		type:Number,
		required: true
	},

	numberOfSponsors: {
		type:Number,
		required: true
	},
	tableHosts: [
		{
			type: Schema.Types.ObjectId,
	    ref: "TableHost"
    }
	],
  

	sponsors: [
		{
			type: Schema.Types.ObjectId,
	    ref: "Sponsor"
    }
	]
});

let Event = mongoose.model('Event', EventSchema);

module.exports = Event;