const {Given, When, Then} = require("@cucumber/cucumber");
const {By, until} = require("selenium-webdriver");
const {expect} = require('chai');

// Important this is a function, not a lambda. Otherwise 'this' is not set
Given('I have started the game', {timeout: 30000}, async function() {
    await this.driver.get('http://localhost:3000');
});

Given('the numbers are {string} and {string}', async function (alias1, alias2) {
    this.aliases[alias1] = await this.driver.findElement(By.className('number1')).getText();
    this.aliases[alias2] = await this.driver.findElement(By.className('number2')).getText();
});

When('I guess the product of {string} and {string}', async function(num1, num2) {
    const input = await this.driver.findElement(By.tagName('input'));
    await input.clear();
    await input.sendKeys('' + (parseFloat(this.aliases[num1]) * parseFloat(this.aliases[num2])));
    await this.driver.findElement(By.xpath('//*[text()="Submit"]')).click();
});

When('I guess something other than the product of {string} and {string}', async function(num1, num2) {
    const input = await this.driver.findElement(By.tagName('input'));
    await input.clear();
    await input.sendKeys('' + (parseFloat(this.aliases[num1]) * parseFloat(this.aliases[num2]) + 1));
    await this.driver.findElement(By.xpath('//*[text()="Submit"]')).click();
});

Then('I will be told that I have won', async function() {
    const result = await this.driver.findElement(By.className('Result-details'));
    await this.driver.wait(until.elementTextMatches(result, /won/i));
});

Then('I will be told that I have lost', async function() {
    const result = await this.driver.findElement(By.className('Result-details'));
    await this.driver.wait(until.elementTextMatches(result, /lost/i));
});

Then('I cannot see the result', async function() {
    const elements = await this.driver.findElements(By.className('Result-details'));
    expect(elements.length).to.equal(0);
});

Then('I can start the game again', async function () {
    await this.driver.findElement(By.xpath('//*[text()="Play again"]')).click();
});

Then('I cannot start the game again', async function () {
    const elements = await this.driver.findElements(By.xpath('//*[text()="Play again"]'));
    expect(elements.length).to.equal(0);
});

Then('the numbers are not {string} and {string}', async function (alias1, alias2) {
    const actual1 = await this.driver.findElement(By.className('number1')).getText();
    const actual2 = await this.driver.findElement(By.className('number2')).getText();
    const expected1 = this.aliases[alias1];
    const expected2 = this.aliases[alias2];
    expect(actual1).not.to.equal(expected1);
    expect(actual2).not.to.equal(expected2);
});
