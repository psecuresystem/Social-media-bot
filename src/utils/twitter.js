const puppeteer = require("puppeteer");

async function sendTw(message) {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage();
    await page.goto('https://twitter.com');
    await page.waitForNetworkIdle()
    await page.click('a[href="/login"')
    await page.waitForNavigation()
    await page.waitForNetworkIdle()
    await page.type('input[type="text"]','+2348112907883')
    await page.click('div.css-18t94o4.css-1dbjc4n.r-sdzlij.r-1phboty.r-rs99b7.r-ywje51.r-usiww2.r-2yi16.r-1qi8awa.r-1ny4l3l.r-ymttw5.r-o7ynqc.r-6416eg.r-lrvibr.r-13qz1uu')
    await page.waitForSelector('input[type="password"]')
    await page.type('input[type="password"]','vision2022')
    await page.click('div[data-testid=LoginForm_Login_Button]')
    await page.waitForNavigation()
    await page.waitForNetworkIdle()
    await page.click('div[contenteditable="true"]')
    for(let char of message.replaceAll('*','').replaceAll('_','').replaceAll('\n',
    `
    `)) {
        await page.keyboard.press(char)
    }
    await page.click('div[data-testid=tweetButtonInline]')
    await page.waitForNetworkIdle()
    await browser.close()
    console.log('Sent')
}


module.exports= sendTw