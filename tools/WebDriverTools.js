const webDriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const firefox = require("selenium-webdriver/firefox");
require("geckodriver");
require("chromedriver");

function launchBrowser(driver, browserType) {
  driver = new webDriver.Builder(browserType).forBrowser(browserType).build();
  return driver;
}

module.exports = {
  launchBrowser,
};
