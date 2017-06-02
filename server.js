'use strict';

const express = require('express');
const app = express();
const chalk = require('chalk');
const path = require('path');

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')));

app.get('/*', (req, res) => {
	res.redirect('/');
	console.log(chalk.blue('Redirecting route', req.originalUrl))
})

app.get('/', (req, res) => {

	/* Log all get requests for the files that don't have a `.` in them -->
	 * Excludes the logging of images and other files not helpful for
	 * development
	 */
	if (!req.originalUrl.includes('.')) {
		console.log(chalk.yellow("GET: " + req.originalUrl));
	}

	res.sendFile(path.join(__dirname, 'public/index.html'));

});


app.listen(port, () => {
	console.log('Listening to port:', port);
});

