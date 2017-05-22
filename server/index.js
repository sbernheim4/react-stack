'use strict';

const path = require('path');
const chalk = require('chalk');
const express = require('express');
const app = express();

const port = process.env.PORT || 1337;

// folder to serve public files --> compiled jsx, css, imgs etc
app.use(express.static(path.join(__dirname, '../app/public')));

// For any get request return the index.html file
app.get('/', function (req, res) {
	/* Return the index.html file and hand over the routing to Angular's UI-Router */
	res.sendFile(path.join(__dirname, '../app/index.html'));
});



// Listen on the port for incoming requests
app.listen(port, function() {
	console.log('Listening to port:', port);
});
