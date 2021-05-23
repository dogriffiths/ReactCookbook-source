import {Builder, By, until} from "selenium-webdriver";

require('chromedriver');

let driver;

describe('Basic game functions', () => {
    beforeEach(() => {
        driver = new Builder().forBrowser('chrome').build();
    });

    afterEach(() => {
        driver.quit();
    });

    it('should tell me if I won', async () => {
        await driver.get('http://localhost:3000');
        const [number1, number2, input, submit] = await Promise.all([
            driver.findElement(By.css('.number1')).getText(),
            driver.findElement(By.css('.number2')).getText(),
            driver.findElement(By.css('input')),
            driver.findElement(By.xpath('//button[text()=\'Submit\']'))
        ]);
        await input.sendKeys('' + (number1 * number2));
        await submit.click();
        // const resultText = await driver.findElement(By.css('.Result')).getText();
        // expect(resultText).toMatch(/won/i);
        await driver.wait(until.elementLocated(By.css('.Result')));
        const resultElement = driver.findElement(By.css('.Result'));
        await driver.wait(until.elementTextMatches(resultElement, /won/i));
    }, 60000);
});