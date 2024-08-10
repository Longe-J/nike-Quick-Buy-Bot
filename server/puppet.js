const puppeteer = require('puppeteer');

const theUrl = 'https://www.nike.com/gb/launch/t/air-max-black-tea-and-petra-brown';

const buyShoe = ()=> (async ()=> {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(theUrl , { waitUntil: 'networkidle0' });
    console.log('works');

    await page.waitForSelector('.nds-btn.dialog-actions-accept-btn.css-60b779.ex41m6f0.btn-primary-dark.btn-md')
    await page.click('.nds-btn.dialog-actions-accept-btn.css-60b779.ex41m6f0.btn-primary-dark.btn-md');
    await page.waitForNavigation();
    await page.click('#size_item_radio12');
   
    
    await page.click('.ncss-btn-primary-dark.btn-lg.buying-tools-cta-button');
})();

module.exports = buyShoe