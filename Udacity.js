const puppeteer = require('puppeteer-extra');

const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

async function scrapeProduct(url) {
	
	puppeteer.launch({ headless: true }).then(async browser => {
	console.log('Running tests..');
	const page = await browser.newPage();
	await page.goto(url);
	await page.waitFor(5000);
	
	
	
let data = await page.evaluate(() =>{	
//
	// var skus = document.querySelectorAll('div[class="udlite-heading-sm udlite-focus-visible-target course-card--course-title--2f7tE"],div[class="price-text--price-part--Tu6MH course-card--discount-price--3TaBk udlite-heading-md"] >span >span, div[class="udlite-text-xs course-card--instructor-list--lIA4f"]');
	// //
	// return [...skus,].map(function(el) {

	// }); 
	//var courseName = document.querySelectorAll('div[class="horizontal-box"]');
	var courseName = document.querySelectorAll('h2[class="card__title__nd-name"]');
	var price = document.querySelectorAll('.catalog-card-tag--desktop');
	var link = document.querySelectorAll('a');
	//var instructorName = document.querySelectorAll(".text-content__text");
	//
	//var json = JSON.stringify(price);
	//return courseName;
	//  courseName ,instructorName:["wow"]   ,,link:[""]
	var json = {courseName:["wow"],price:[""]};
	for(let i = 0; i < courseName.length; i++){
		json.courseName.push(JSON.stringify(courseName[i].innerText));
		json.price.push(JSON.stringify(price[i].innerText));
		//json.link.push(JSON.stringify(link[i+43].href));
		//json.instructorName.push(JSON.stringify(instructorName[i].innerText));
	}
	
		return json;

	
});

console.log(data);
	
		});
}

var query = 'web';
scrapeProduct('https://www.udacity.com/courses/all?search='+query);	
	
	
	

