import {Builder, By, until} from "selenium-webdriver";

require('chromedriver');
let fs = require('fs');

describe('shots', () => {
    it('should take screenshots of storybook components',
        async () => {
            const browserEnv = process.env.SELENIUM_BROWSER || 'chrome';
            const url = process.env.START_URL || 'http://localhost:6006';
            const driver = new Builder().forBrowser('chrome').build();
            driver.manage().window().setRect({
                width: 1200,
                height: 900,
                x: 0,
                y: 0
            })

            const outputDir = './screenshots/' + browserEnv;
            fs.mkdirSync(outputDir, {recursive: true});

            await driver.get(url);

            await driver.wait(
                until.elementLocated(By.className("sidebar-item")),
                60000
            );
            let elements = await driver.findElements(
                By.css("button.sidebar-item")
            );
            for (let e of elements) {
                const expanded = await e.getAttribute('aria-expanded');
                if (expanded !== 'true') {
                    await e.click();
                }
            }
            let links = await driver.findElements(
                By.css("a.sidebar-item"));
            for (let link of links) {
                await link.click();
                const s = await link.getAttribute('id');
                let encodedString = await driver.findElement(
                    By.css('#storybook-preview-wrapper')
                ).takeScreenshot();
                await fs.writeFileSync(`${outputDir}/${s}.png`,
                    encodedString,
                    'base64'
                );
            }

            driver.quit();
        }, 60000);
});