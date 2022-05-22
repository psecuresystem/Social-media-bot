const puppeteer = require("puppeteer");

async function sendFacebook(message) {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage();
    await page.goto('https://facebook.com');
    await page.type('input[type="text"]','visiondaniels32@gmail.com', {delay: 10})
    await page.type('input[type="password"]','danz6278', {delay: 10})
    await page.click('button[type="submit"]')
    await page.waitForNavigation()
    await page.goto('https://web.facebook.com/Kingdom_Keys_Test-110206731697349')
    await page.click('div[aria-label="Create post"]')
    await page.waitForSelector('div[contenteditable="true"]')
    await page.waitForTimeout(2000)
    for(let char of message.replaceAll('*','').replaceAll('_','').replaceAll('\n',
    `
    `)) {
        await page.keyboard.press(char)
    }
    await page.click('div[aria-label="Post"]')
    await page.waitForTimeout(100)
    await page.waitForNetworkIdle()
    try {
        await page.click('div.oajrlxb2[aria-label="Not now"][tabindex="0"]')
    }catch(err) {

    } finally {
        await page.waitForTimeout(100)
        await page.waitForNetworkIdle()
        await page.waitForTimeout(2000)
        await page.waitForNetworkIdle()
        await browser.close();
        console.log('Posted')
    }
}

module.exports = sendFacebook