import { pathToFileURL } from 'url';
import path from 'path';

(async () => {
    // Convert Windows path to a valid file:// URL
    const puppetStringsPath = pathToFileURL(path.resolve('C:\\Users\\admin\\Desktop\\tailwind\\tailwind-login-form\\node_modules\\puppet-strings\\index.js')).href;

    // Dynamically import the ES module using a file URL
    const {
        openBrowser, closeBrowser, openTab, waitForNavigation,
        findElement, fillInElement, clickElement, evalInTab
    } = await import(puppetStringsPath);

    async function run() {
        const browser = await openBrowser('chrome.exe');

        const tab = await openTab(browser, 'https://google.com/ncr');

        const searchInput = await findElement(tab, '[name="q"]');
        await fillInElement(searchInput, 'Node.js');

        const searchButton = await findElement(tab, `input[value="I'm Feeling Lucky"]`);
        await clickElement(searchButton);
        await waitForNavigation(tab);

        const title = await evalInTab(tab, [], 'return document.title');
        console.log(title);

        await closeBrowser(browser);
    }

    run().catch(console.error);
})();
