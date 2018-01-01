const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const Event = require('./models/Event');
const TableHost = require('./models/TableHost');
const Sponsor = require('./models/Sponsor');
const Guest = require('./models/Guest');
const session = require('express-session');
const mid = require('./middleware')
const path = require('path');
const staticFiles = express.static(path.join(__dirname, '../../client/build'))


const PORT = process.env.PORT || 8080;
const app = express();

app.use(staticFiles);
app.use(session({
	secret: 'chariTABLE Host',
	resave: true,
	saveUninitialized: false
}));

// Database connection
mongoose.Promise = Promise;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/chariTABLE';
mongoose.connect(MONGODB_URI);
const db = mongoose.connection;

db.on('error', (err) => console.log('Mongoose Error: ', err));
db.once('open', () => console.log('Mogoose Connection Successful'));

// app.use(express.static("client/build"));

app.use(bodyParser.json());

app.get('/login', (req, res, next) => {

});

// POST /login
app.post('/login', (req, res, next) => {
	if(req.body.username && req.body.password) {
		User.authenticate(req.body.username, req.body.password, (error, user) => {
			if (error || !user) {
				var err = new Error('Wrong username or password!!');
				err.status = 401;
				return next(err);
			} else {
				let sessionID = req.session.userId = user._id;
				console.log('Login Session ID: ', sessionID);
				return res.redirect('/api/events/' + sessionID);
			}
		});

	} else {
		var err = new Error('Username and password are Required');
		err.status = 401
		return next (err);
	}
})

// GET /logout
app.get('/logout', function(req, res, next) {
	console.log('Loggin Out......')
  if (req.session) {
    // delete session object
    req.session.destroy(function(err) {
      if(err) {
        return next(err);
      } else {
        return res.redirect('/');
				console.log('Logout Session Id:' ,req.session.userId);
      }
    });
  }
});

app.get('/api', (req, res) => res.send('Hello backend world!'));

app.get('/api/companies', (req, res) => {
	User.find({})
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send(err.message ? err.message : 'Internal server blowup');
		});
});

app.get('/api/account/:companyID'), (req, res) => {
	console.log('Count Company ID', req.params.companyID);
}

app.get('/api/companies/:companyID', (req, res) => {
	console.log('Edit Company ID: ', req.params.companyID);
	User.find({_id:req.params.companyID})
		.then((data) => {
			console.log('Company Info: ', data);
			res.json(data);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send(err.message ? err.message : 'Internal server blowup');
		});
});

app.post('/api/companies/:companyID', (req, res) => {
	console.log('Edit Company ID: ', req.params.companyID);
	console.log('Edit Company Body: ', req.body);
	User.findByIdAndUpdate(req.params.companyID, {
		$set: {
			companyName: req.body.companyName,
			addressLine1: req.body.addressLine1,
			addressLine2: req.body.addressLine2,
			city: req.body.city,
			state: req.body.state,
			zipCode: req.body.zipCode,
			phoneNumber: req.body.phoneNumber,
			website: req.body.website,
			email: req.body.email,
			username: req.body.username,
			createdOn: req.body.createdOn
		}
	}, {
		new: true },
		function (err, user) {
  if (err) return err;
  res.send(user);
	});

});




app.post('/register', (req, res) => {

			let newUser = new User();
			newUser.companyName = req.body.companyName;
			newUser.addressLine1 = req.body.addressLine1;
			newUser.addressLine2 = req.body.addressLine2;
			newUser.city = req.body.city;
			newUser.state = req.body.state;
			newUser.zipCode = req.body.zipCode;
			newUser.phoneNumber = req.body.phoneNumber;
			newUser.website = req.body.website;
			newUser.email = req.body.email;
			newUser.username = req.body.username;
			newUser.password = req.body.password;
			newUser.save()
		.then((user) => {
					// req.session.userId = user._id;
					// res.json(user);
					// return res.redirect('/login');
					let sessionID = req.session.userId = user._id;
					console.log('Login Session ID: ', sessionID);
					return res.redirect('/api/events/' + sessionID);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send(err.message ? err.message : 'Internal server blowup');
		});
});

app.get('/api/events', (req, res) => {
	Event.find({})
		.then((data) => {
			res.json(data);
			console.log(data);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send(err.message ? err.message : 'Internal server blowup');
		});
});

app.get('/api/events/:id', mid.requiresLogin, (req, res) => {

	User.findById({_id:req.params.id})
		.populate('events')
		.then((data) => {
			res.json(data);
			// console.log(data);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send(err.message ? err.message : 'Internal server blowup');
		});
});

app.get('/api/eventDetails/:id', mid.requiresLogin, (req, res) => {
	console.log('Event Details Company IDs :', req.params.id);

	const event = {
		eventInfo: {},
		guests: []
	}

	Event.findOne({_id: req.params.id})
		.populate({ path: 'tableHosts',
		populate: { path: 'guests' } })
		.then((data) => {
			res.json(data);
			console.log(JSON.stringify(data.tableHosts, null, 2));
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send(err.message ? err.message : 'Internal server blowup');
		});
});




app.get('/api/event/:eventId', mid.requiresLogin, (req, res) => {
	Event.find({ _id: req.params.eventId })
		.then(function(event) {
			res.json(event);
			console.log(event);
		})
		.catch(function(err) {
			console.log(err);
		})
});

// Route for creating Events and associating them with a Company
app.post("/events/:companyID", function(req, res) {
	console.log(req.params.companyID);
	let newEvent = req.body;
	console.log(newEvent);

	Event
	.create(newEvent)
  	.then(function(event) {
 			res.json(event)
    	return User.findOneAndUpdate({ _id: req.params.companyID }, { $push: { events: event._id }}, { new: true });

  })
  .catch(function(err) {
    console.log(err);
  });

});

// Route for creating TableHosts and associating them with an Event
app.post("/event/tablehosts/:eventId", function(req, res) {
	console.log('eventId: ', req.params.eventId);
	let tableHosts = req.body;
	console.log(tableHosts);
	// Converting Object containing Objects to Array containing Objects
	let tableHostArray = [];
	for (var tableHost in tableHosts) {
		tableHostArray.push(tableHosts[tableHost])
	}
	console.log(tableHostArray);
	for (let i = 0; i < tableHostArray.length; i++) {
		TableHost
  	.create(tableHostArray[i])
    .then(function(tableHost) {

      return Event.findOneAndUpdate({ _id: req.params.eventId }, { $push: { tableHosts: tableHost._id }}, { new: true });


    })
    .then(function(event) {

    })
    .catch(function(err) {

    });
	}
	res.send('hello')

});

// Route for creating Sponsors and associating them with an Event
app.post("/event/sponsors/:eventId", function(req, res) {
	console.log(req.params.eventId);
	let sponsors = req.body;
	console.log(sponsors);

	let sponsorArray = [];
	for (var sponsor in sponsors) {
		sponsorArray.push(sponsors[sponsor])
	}
	console.log(sponsorArray);
	for (let i = 0; i < sponsorArray.length; i++) {
		Sponsor
  	.create(sponsorArray[i])
    .then(function(sponsor) {

      return Event.findOneAndUpdate({ _id: req.params.eventId }, { $push: { sponsors: sponsor._id }}, { new: true });

    })
    .then(function(event) {

    })
    .catch(function(err) {

    });
	}
	res.send('hello')

});

// Route for creating Guests and associating them with a TableHost
app.post("/event/guest/:tableHostId", function(req, res) {
	console.log(req.params.tableHostId);
	let guest = req.body;
	console.log(guest);

	Guest
	.create(guest)
  .then(function(guest) {

    return TableHost.findOneAndUpdate({ _id: req.params.tableHostId }, { $push: { guests: guest._id }}, { new: true });

  })
  .then(function(event) {

  })
  .catch(function(err) {

  });

	res.send('hello')

});

// Route for unique TableHost URL for guest registration
app.get('/GuestRegistration/:eventId/:tableHostId', (req, res) => {
	console.log(req.params.eventId);
	console.log(req.params.tableHostId);
	let eventDetails = {
		searchedEvent: '',
		tableHost: ''
	}

	Event.findOne({ _id: req.params.eventId })
		.populate('sponsors')
		.then(function(event) {
			eventDetails.searchedEvent = event;
			TableHost.findOne({ _id: req.params.tableHostId })
				.populate('guests')
				.then(function(host) {
					eventDetails.tableHost = host;
					res.json(eventDetails);
			})
			.catch(function(err) {
				console.log(err);
			})
		})
		.catch(function(err) {
			console.log(err);
		})
})


app.get('/account', (req, res, next) => {
	if(!req.session.userId ) {
		var err = new Error("You are not authorized to view this page");
		err.status = 403;
		return next(err);
	}
	User.findById(req.session.userId)
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send(err.message ? err.message : 'Internal server blowup');
		});

	});

// Updating Event Information

app.put('/api/events/:eventId', (req, res) => {
    console.log('EventId: ', req.params.eventId);
    console.log('EventBody: ', req.body);
    Event.findByIdAndUpdate(req.params.eventId, {
        $set: {
            eventName: req.body.eventName,
            eventLocation: req.body.eventLocation,
            eventDate: req.body.eventDate,
            eventTime: req.body.eventTime,
            contactName: req.body.contactName,
            contactPhone: req.body.contactPhone,
            contactEmail: req.body.contactEmail,
            numberOfTables: req.body.numberOfTables,
            numberOfTableHosts: req.body.numberOfTableHosts,
            numberOfGuestsPerTable: req.body.numberOfGuestsPerTable,
            numberOfSponsors: req.body.numberOfSponsors
        }
    },
    {
        new: true
    },

    function (error, event) {
  		if (error) return error;
  		res.send(event);
	});
});

// Updating Tablehost Information
app.put('/api/tablehosts/:tablehostId', (req, res) => {
    console.log('TablehostId: ', req.params.tablehostId);
    console.log('TablehostBody: ', req.body);
    TableHost.findByIdAndUpdate(req.params.tablehostId, {
        $set: {
            name: req.body.name,
            email: req.body.email
        }
    },
    {
        new: true
    },

    function (err, tablehost) {
  		if (err) return err;
  		res.send(tablehost);
	});
});

// Updating Guest Information
app.put('/api/guests/:guestId', (req, res) => {
    console.log('GuestId: ', req.params.guestId);
    console.log('GuestBody: ', req.body);
    Guest.findByIdAndUpdate(req.params.guestId, {
        $set: {
            name: req.body.name,
            email: req.body.email
        }
    },
    {
        new: true
    },

    function (err, guest) {
  		if (err) return err;
  		res.send(guest);
	});
});

// Event Delete
app.delete('/api/events/:eventId', (req, res) => {
	Event.findByIdAndRemove(req.params.eventId, (err, event) => {
		if (err) return err;
		res.send(event);
	})
});

// Tablehost Delete
app.delete('/api/tablehosts/:tablehostId', (req, res) => {
	TableHost.findByIdAndRemove(req.params.tablehostId, (err, tablehost) => {
		if (err) return err;
		res.send(tablehost);
	})
});

// Guest Delete
app.delete('/api/guests/:guestId', (req, res) => {
	Guest.findByIdAndRemove(req.params.guestId, (err, guest) => {
		if (err) return err;
		res.send(guest);
	})
});

// Company Delete
app.delete('/api/companies/:companyID', (req, res) => {
	User.findByIdAndRemove(req.params.companyID, (err, company) => {
		if (err) return err;
		res.send(company);
	})
	// User.findById(req.params.companyID, function(err, company) {
  //
  //   if (err)
  //       return next(new restify.InternalError(err));
  //   else if (!company)
  //       return next(new restify.ResourceNotFoundError('The resource you requested could not be found.'));
  //
  //   // find and remove all associated Events
  //   Event.find({_id: company._id}).remove();
  //
  //   // find and remove all TableHosts
  //   TableHost.find({_id: company._id}).remove();
  //
	// 	// find and remove all Guests
	// 	Guest.find({_id: company._id}).remove();
  //
	// 	// find and remove all Sponsors
	// 	Sponsor.find({_id: company._id}).remove();
  //
  //   User.remove();
  //
  //   res.send({id: req.params.companyId});

// });
});

// Landing Page Counts

// Company Count
	app.get('/companies/count', (req, res) => {
		User.count({})
			.then(function(companyCount) {
				res.json(companyCount);
				console.log( "Number of Users:", companyCount );
			})
			.catch(function(err) {
				console.log(err);
			})
	});

	// Event Counts
	app.get('/events/count', (req, res) => {
		Event.count({})
			.then(function(eventCount) {
				res.json(eventCount);
				console.log( "Number of Events:", eventCount );
			})
			.catch(function(err) {
				console.log(err);
			})
	});

	// TableHost Counts
	app.get('/tableHosts/count', (req, res) => {
		TableHost.count({})
			.then(function(TableHostCount) {
				res.json(TableHostCount)
				console.log( "Number of TableHosts:", TableHostCount );
			})
			.catch(function(err) {
				console.log(err);
			})
	});

	// Guest Counts
	app.get('/guests/count', (req, res) => {
		Guest.count({})
			.then(function(guestCount) {
				res.json(guestCount);
				console.log( "Number of Guests:", guestCount );
			})
			.catch(function(err) {
				console.log(err);
			})
	});

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname,'../public/index.html'));
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/chariTABLE');

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
