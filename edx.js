const puppeteer = require('puppeteer-extra');

const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

async function scrapeProduct(url) {
	
	puppeteer.launch({ headless: true }).then(async browser => {
	console.log('Running tests..');
	const page = await browser.newPage();
	await page.goto(url);
	await page.waitFor(5000);
	
	
	//await page.waitForSelector('#color-primary-text card-title headline-1-text');
let data = await page.evaluate(() =>{	
//
	// var skus = document.querySelectorAll('div[class="udlite-heading-sm udlite-focus-visible-target course-card--course-title--2f7tE"],div[class="price-text--price-part--Tu6MH course-card--discount-price--3TaBk udlite-heading-md"] >span >span, div[class="udlite-text-xs course-card--instructor-list--lIA4f"]');
	// //
	// return [...skus,].map(function(el) {

	// });
	var courseName = document.querySelectorAll('div[class="d-card-body"] >h3 >span >span');
	//var price = document.querySelectorAll('div[class="price-text--price-part--Tu6MH course-card--discount-price--3TaBk udlite-heading-md"] >span >span');
	var link = document.querySelectorAll('a[class="discovery-card-link"]');
	var instructorName = document.querySelectorAll('div[class="provider"] >span >span:nth-child(1) >span');
	//StanfordOnline
	//var json = JSON.stringify(price);
	//return courseName;
	//,price:[""]  courseName,
	var json = {courseName:[""],link:[""],instructorName:[""]};
	let j=0;
	for(let i = 0; i < link.length; i++){
		if(courseName[i] != ""){
				json.courseName.push(JSON.stringify(courseName[j].innerText));	
				j+=2;
		}
		//json.price.push(JSON.stringify(price[i].innerText));
		json.instructorName.push(JSON.stringify(instructorName[i].innerText));
		json.link.push(JSON.stringify(link[i].href));
	}
	
		return json;

	
});

console.log(data);

		});
		
		//browser.close();
}

var query = 'nodejs';
scrapeProduct('https://www.edx.org/search?q='+query);	
//scrapeProduct('https://www.udemy.com/courses/search/?q='+query);	
	
	


