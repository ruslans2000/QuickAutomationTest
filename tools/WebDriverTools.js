const { Builder, until, wait } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const firefox = require("selenium-webdriver/firefox");
require("geckodriver");
require("chromedriver");

async function launchBrowser(driver, browserType) {
  driver = await new Builder(browserType).forBrowser(browserType).build();
  await driver.manage().window().maximize();
  return driver;
}

async function waitForElement(driver, byLocator) {
  await driver.wait(until.elementLocated(byLocator));
  const element = await driver.findElement(byLocator);
  return element;
}

module.exports = {
  launchBrowser,
  waitForElement,
};
