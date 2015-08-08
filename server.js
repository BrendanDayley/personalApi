'use strict'

var name = 'Brendan Dayley';
var location = 'Provo, UT';
var hobbies = ['Programming', 'Airsoft', 'Rappelling', 'Jeeping', 'Hiking', 'Camping'];
var occupations = ['4th Dungeon Master of Zork', 'Co-Author', 'Big 5 Sporting Goods', 'scout camp staff', 'Student At DevMountain'];




var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use(function (req, res, next) {
	res.header('Access-Controll-Allow-Origin', '*');
	res.header('Access-Controll-Allow-Methods', 'OPTIONS, GET, POST');
	res.header('Access-Contoll-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/name', function (req, res) {
	console.log(JSON.stringify(name));
	res.send(JSON.stringify(name))
});
app.get('/location', function (req, res) {
	res.send(JSON.stringify(location));
});
app.get('/hobbies', function (req, res) {
	if (req.query.order === 'asc') {
		res.send({
			hobbies: hobbies.sort()
		});
	} else if (req.query.order === 'desc') {
		res.send({
			hobbies: hobbies.sort().reverse()
		});
	} else {
		res.send(JSON.stringify({
			hobbies: hobbies
		}));
	}
});
app.get('/occupations', function (req, res) {
	if (req.query.order === 'asc') {
		res.send({
			occupations: occupations.sort()
		});
	} else if (req.query.order === 'desc') {
		res.send({
			occupations: occupations.sort().reverse()
		});
	} else {
		res.send(JSON.stringify({
			Occupations: occupations
		}));
	}
});
app.get('/occupations/latest', function (req, res) {
	res.send(JSON.stringify({
		mostRecentOccupation: occupations[occupations.length - 1]
	}))
});

app.put('/name', function (req, res) {
	name = req.body.name;
});
app.put('/location', function (req, res) {

});
app.put('/hobbies', function (req, res) {

});
app.put('/occupations', function (req, res) {

});

app.listen(8181);
