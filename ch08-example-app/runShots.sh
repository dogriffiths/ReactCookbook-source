#!/bin/bash
rm -rf screenshots

# Where the Selenium remote server is
export SELENIUM_REMOTE_URL=http://192.168.1.16:4444/wd/hub

# The address of Storybook
export START_URL=http://192.168.1.14:6006

# Run for Chrome
export SELENIUM_BROWSER=chrome
npm run testShots

# Run for Firefox
export SELENIUM_BROWSER=firefox
npm run testShots
