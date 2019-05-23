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
    console.log('goto translate')
    await page.goto('https://translate.google.co.kr/?hl=ko')
    console.log('try translate')
    await page.type('#source', 'I\'ve been writing a few tutorials on using the HERE Location Services (HLS) platform with Android. These tutorials have included showing a map, dropping markers, and geocoding address information to latitude and longitude position information. This time around we\'re going to take things to the next level by converting latitude and longitude position information to address information within an Android application.')
    await page.waitFor(2000)
    console.log('page evaluat\n===================================\n\n')
    const tlidtranslation = await page.$('.tlid-translation')
    console.log(await (await tlidtranslation.getProperty('innerHTML')).jsonValue())
    console.log('\n\n===================================\ntranslate complete')
    await browser.close()
  })()
} catch (err) {
  console.error(err)
}