const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8081');
  await page.evaluate(() => {
    window.scrollTo(0, document.querySelector('#skills').offsetTop - 100);
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'skills-section.png' });
  await browser.close();
})();
