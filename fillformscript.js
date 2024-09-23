const puppeteer = require('C:\\Users\\admin\\node_modules\\puppeteer');

// Extract credentials from command-line arguments
const credentials = process.argv.slice(2).map((arg, index, array) => {
  if (index % 2 === 0) {
    return { username: arg, password: array[index + 1] };
  }
}).filter(Boolean);

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

(async () => {
  const browser = await puppeteer.launch({ headless: false });  // Set to 'false' to open a visible browser
  const page = await browser.newPage();

  // Go to the website
  await page.goto('http://127.0.0.1:5500/index.html', { waitUntil: 'networkidle2' });

  for (const { username, password } of credentials) {
    // Fill in the form
    await page.type('#username', username); // Replace with actual form selector and value
    await page.type('#password', password); // Replace with actual form selector and value

    // Submit the form
    await page.click('#signupButton'); // Replace with the submit button selector
    console.log(`Form successfully submitted for ${username}!`);

    await delay(3000);
  }

  console.log('Form successfully submitted!');
  delay(15000);  // Wait for 15 seconds
  browser.close();

})();