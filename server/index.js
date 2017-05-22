'use strict';

const path = require('path');
const chalk = require('chalk');
const express = require('express');
const app = express();

const port = process.env.PORT || 1337;

// folder to serve public files --> compiled jsx, css, imgs etc
app.use(express.static(path.join(__dirname, '../app/public')));

app.get('/', function (req, res) {
	/* Return the index.html file */
	res.sendFile(path.join(__dirname, '../app/index.html'));
});

app.get('/manifest.json', function (req, res) {
	/* Return the manifest.json file */
	res.sendFile(path.join(__dirname, './manifest.json'));
});


// Listen on the port for incoming requests
app.listen(port, function() {
	console.log('Listening to port:', port);
});
