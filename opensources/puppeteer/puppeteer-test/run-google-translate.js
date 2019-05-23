/**
 * @name Youtube search
 *
 * @desc  Looks for Fleetwood Mac's "Dreams" video on youtube.com and clicks on the third video.
 * Waits for 5 seconds for the video to load.
 */
const puppeteer = require('puppeteer')
const screenshot = 'result_assert/google_tr.png'
try {
  (async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://translate.google.co.kr/?hl=ko')
    await page.type('#source', 'Google\'s free service instantly translates words, phrases, and web pages between English and over 100 other languages.')
    await page.waitFor(2000)
    await page.screenshot({path: screenshot})
    await browser.close()
    console.log('See screenshot: ' + screenshot)
  })()
} catch (err) {
  console.error(err)
}