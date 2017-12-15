const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const Event = require('./models/Event');
const TableHost = require('./models/TableHost');
const Sponsor = require('./models/Sponsor');
const Guest = require('./models/Guest');
const session = require('express-session');


const PORT = 8080;
const app = express();

app.use(session({
	secret: 'chariTABLE Host',
	resave: true,
	saveUninitialized: false
}));

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
				req.session.userId = user._id;
				console.log(req.session.userId);
				return res.redirect('/account');

			}
		});

	} else {
		var err = new Error('Username and password are Required');
		err.status = 401
		return next (err);
	}
})

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
					req.session.userId = user._id;
					res.json(user);
					// return res.redirect('/login');
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send(err.message ? err.message : 'Internal server blowup');
		});
});

app.get('api/events', (req, res) => {
	Event.find({})
		.then((data) => {
			res.json(data);
			console.log(data);
		})
		.catch((err) => {
			console.log(err);
			// res.status(500).send(err.message ? err.message : 'Internal server blowup');
		});
});


app.get('/api/event/:eventId', (req, res) => {
	Event.find({ _id: req.params.eventId })
		.then(function(event) {
			res.json(event);
			console.log(event);
		})
		.catch(function(err) {
			console.log(err);
		})
})

app.post('/events', (req, res) => {
	// Put req.body into an object
	console.log(req.body);
	let newEvent = req.body;
	Event.create(newEvent)
	.then(function(event) {
		console.log(event);
		res.json(event);

	})
	.catch(function(err) {
		console.log(err);
	});
});

// Route for saving/updating an Events associated TableHosts
app.post("/event/tablehosts/:eventId", function(req, res) {
	console.log(req.params.eventId);
	let tableHosts = req.body;
	console.log(tableHosts);

	let tableHostArray = [];
	for (tableHost in tableHosts) {
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

// Route for saving/updating an Events associated Sponsors
app.post("/event/sponsors/:eventId", function(req, res) {
	console.log(req.params.eventId);
	let sponsors = req.body;
	console.log(sponsors);

	let sponsorArray = [];
	for (sponsor in sponsors) {
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

// Route for saving/updating a TableHost associated Guests
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

app.get('/GuestRegistration/:eventId/:tableHostId', (req, res) => {
	console.log(req.params.eventId);
	console.log(req.params.tableHostId);
	eventDetails = {
		searchedEvent: '',
		tableHost: ''
	}
	
	Event.findOne({ _id: req.params.eventId })
		.then(function(event) {
			eventDetails.searchedEvent = event;
			TableHost.findOne({ _id: req.params.tableHostId })
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

// app.get('/login', req, res) => {
//
// 	Company.find({username: })
// 		.then((data) => {
// 			res.json(data);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 			res.status(500).send(err.message ? err.message : 'Internal server blowup');
// 		});
// }

app.get('/account', (req, res, next) => {
	if(! req.session.userId ) {
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





mongoose.connect('mongodb://localhost/chariTABLE');

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
