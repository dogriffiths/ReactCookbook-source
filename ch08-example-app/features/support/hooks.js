const {After, Before} = require("@cucumber/cucumber");
const seleniumWebdriver = require('selenium-webdriver');

// Make the creation and quitting of the trigger synchronoous so that we don't kill a chromedriver while we're using it
Before(function () {
    this.driver = new seleniumWebdriver.Builder()
        .forBrowser('chrome')
        .build()
});

After(function () {
    return this.driver.quit();
});