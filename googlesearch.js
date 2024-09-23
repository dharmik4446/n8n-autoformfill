const puppeteer = require('C:\\Users\\admin\\node_modules\\puppeteer');
(async () => {
    const browser = await puppeteer.launch({ headless: false });  // Set to 'false' to open a visible browser
    const page = await browser.newPage();

    // Go to the website
    await page.goto('https://www.google.com/', { waitUntil: 'networkidle2' });

    // Fill in the form
    await page.type('#APjFqb', "how google works"); // Replace with actual form selector and value

    await page.keyboard.press('Enter');
    console.log('Enter key pressed!');

    // Wait for the results page to load
    await page.waitForNavigation({ waitUntil: 'networkidle2' });

    console.log('Search results loaded!');


    console.log('Form successfully submitted!');
    delay(15000);  // Wait for 15 seconds
    browser.close();

})();