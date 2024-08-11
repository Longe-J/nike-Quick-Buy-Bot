const puppeteer = require('puppeteer-extra');
const stealthPlugin = require('puppeteer-extra-plugin-stealth');
const stealth = stealthPlugin();

console.log('Enabled evasions:', [...stealth.enabledEvasions]);

puppeteer.use(stealthPlugin());

const theUrl = 'https://www.nike.com/gb/launch/t/air-max-black-tea-and-petra-brown';

const buyShoe = ()=> (async ()=> {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(theUrl , { waitUntil: 'networkidle0' });

    await page.setViewport({width: 1080, height: 1024});

    console.log('works');

    await page.waitForSelector('.nds-btn.dialog-actions-accept-btn.css-60b779.ex41m6f0.btn-primary-dark.btn-md');
    await page.click('.nds-btn.dialog-actions-accept-btn.css-60b779.ex41m6f0.btn-primary-dark.btn-md');
    await page.waitForNavigation();

    console.log('this 2');
    await page.waitForSelector('#size_item_radio12');
    await page.click('#size_item_radio12');
   console.log('this three');
    
    await page.click('.ncss-btn-primary-dark.btn-lg.buying-tools-cta-button');
    console.log('final');
})();

module.exports = buyShoe