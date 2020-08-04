const express = require('express');
const router = express.Router();
//require('dotenv').config();
const mongoose = require('mongoose');


//const Search = require('../models/udemy_search');
//const Scrapper = require('../controller/scrapers');
const Harvard = require('../controller/harvard');

//console.log('Seriously here');


//router.get('/',Scrapper.scrape);
router.get('/',Harvard.scrape);



console.log('Return');


module.exports = router;


