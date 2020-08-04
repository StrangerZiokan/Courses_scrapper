const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//const youtubeSearchRoutes = require('./routes/youtube_search');
//const udemySearchRoutes  = require('./routes/udemy_search');
const harvardSearchRoutes = require('./routes/harvard');
const edxSearchRoutes = require('./routes/edx');
const courseraSearchRoutes = require('./routes/coursera');
const udacitySearchRoutes = require('./routes/Udacity');

//console.log('In routes file');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) =>{
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","*");  //'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	if(req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
		return res.status(200).json({});
	}
	next();
});

//app.use('/youtubeSearch', youtubeSearchRoutes);
app.use('/harvardSearch',harvardSearchRoutes);
app.use('/edxSearch',edxSearchRoutes);
app.use('/courseraSearch',courseraSearchRoutes);
app.use('/udacitySearch',udacitySearchRoutes);



//console.log('aint here');
app.use((req, res, next) =>{
	const error = new Error('Not found');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	});
})


module.exports = app;