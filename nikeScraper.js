const puppeteer = require('puppeteer');

(async ()=> {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto('https://www.nike.com/gb/launch/t/air-jordan-1-low-silver-emea');
    await page.click('#size_item_radio12');
    await page.evaluate(() =>{
        
    })
    
    await page.click('.ncss-btn-primary-dark.btn-lg.buying-tools-cta-button');
})();