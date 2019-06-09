const puppeteer = require('puppeteer');

puppeteer.launch()
	.then((browser) => {
		return browser.newPage()
			.then((page) => {
				return page.goto('https://google.com', {waitUntil: 'networkidle2'})
					.then(() => page.$('#lst-ib'))
					.then((search) => search.click())
					.then(() => page.type('puppeteer'))
					.then(() => page.$('input[type="submit"]'))
					.then((submit) => submit.click())
					.then(() => page.waitForNavigation())
					.then(() => page.screenshot({path: 'result_assert/google.png'}))
			})
			.then(() => browser.close());
	});