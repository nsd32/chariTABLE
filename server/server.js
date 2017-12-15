const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const Company = require('./models/Company');
const User = require('./models/User');
const Event = require('./models/Event');
const TableHost = require('./models/TableHost');

const PORT = 8080;
const app = express();
app.use(bodyParser.json());

app.get('/api', (req, res) => res.send('Hello backend world!'));

app.get('/api/companies', (req, res) => {
	Company.find({})
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send(err.message ? err.message : 'Internal server blowup');
		});
});

app.post('/api/companies', (req, res) => {
	// if(
	// 	req.body.username &&
	// 	req.body.password &&
	// 	req.body.confirmPassword &&
	// 	req.body.companyName
  //
	// ) { }

	let newCompany = new Company();
	newCompany.companyName = req.body.companyName;
	newCompany.addressLine1 = req.body.addressLine1;
	newCompany.addressLine2 = req.body.addressLine2;
	newCompany.city = req.body.city;
	newCompany.state = req.body.state;
	newCompany.zipCode = req.body.zipCode;
	newCompany.phoneNumber = req.body.phoneNumber;
	newCompany.website = req.body.website;
	newCompany.email = req.body.email;
	newCompany.username = req.body.username;
	newCompany.password = req.body.password;
	newCompany.save()
		.then(() => {
			res.sendStatus(204);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send(err.message ? err.message : 'Internal server blowup');
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

// Route for saving/updating an Article's associated Note
app.post("/event/:id", function(req, res) {
	console.log(req.params.id);
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
   
      return Event.findOneAndUpdate({ _id: req.params.id }, { $push: { tableHosts: tableHost._id }}, { new: true });

    })
    .then(function(event) {
      
    })
    .catch(function(err) {
      
    });
	}
	res.send('hello')
  
});

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




mongoose.connect('mongodb://localhost/chariTABLE');

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
