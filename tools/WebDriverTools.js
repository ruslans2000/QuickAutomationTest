const { Builder, until, wait } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const firefox = require("selenium-webdriver/firefox");
require("geckodriver");
require("chromedriver");

/**
 * Launches browser
 * @param {driver} driver - Current instance of the driver.
 * @param {string} browserType - Name of the browser to be launched.
 * @return {driver} Returns driver.
 */
async function launchBrowser(driver, browserType) {
  driver = await new Builder(browserType).forBrowser(browserType).build();
  await driver.manage().window().maximize();
  return driver;
}

/**
 * Checks if element exists on the page
 * @param {driver} driver - Current instance of the driver.
 * @param {Locator} Locator - Locator to find.
 * @return {element} Returns element.
 */
async function waitForElement(driver, byLocator) {
  await driver.wait(until.elementLocated(byLocator));
  const element = await driver.findElement(byLocator);
  return element;
}

module.exports = {
  launchBrowser,
  waitForElement,
};
