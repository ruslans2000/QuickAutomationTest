const { By } = require("selenium-webdriver");
var assert = require("assert");
var wdTools = require("../tools/WebDriverTools");
const configObj = require("../tools/utils").parseConfig("./config.json");

const url = configObj.websiteURL;
const browserToTestOn = process.env.npm_config_TestBrowser.toLowerCase(); //retrieving browser to run the test on from npm environment variable.
let driver, loginButton, usernameField, passwordField, newEmployeeRecordIcon;

/* All the locators for this page: */
const locators = {
  /* Login Page */
  usernameField: By.id("input-1"),
  passwordField: By.id("input-2"),
  loginButton: By.className("btn-signin-container"),
  /* Landing Page */
  editProfileButton: By.linkText("Edit Profile"),
  workspacesNavMenuItem: By.xpath(
    '//*[@class="nav-label" and contains(text(),"Workspaces")]'
  ),
  dashboardsNavMenuItem: By.xpath(
    '//*[@class="nav-label" and contains(text(),"Dashboards")]'
  ),
  appRecordsNavMenuItem: By.xpath(
    '//*[@class="nav-label" and contains(text(),"Application Records")]'
  ),
  reportsNavMenuItem: By.xpath(
    '//*[@class="nav-label" and contains(text(),"Reports")]'
  ),
  appsAndAppletsNavMenuItem: By.xpath(
    '//*[@class="nav-label" and contains(text(),"Applications & Applets")]'
  ),
  workspaceManagementNavMenuItem: By.xpath(
    '//*[@class="nav-label" and contains(text(),"Workspace Management")]'
  ),
  newEmployeeRecordIcon: By.xpath(
    '//*[@fonticon="plus" and contains(@tooltiptitle,"New Record")]'
  ),
  /* New Record page */
  newEmployeeRecordPageTitle: By.xpath(
    '//*[@ng-if="isNewRecord" and contains(text(),"New Record")]'
  ),
};
/* end of locators object */

/* Test cases start here */
describe("Sign in to Swimlane and add a record: ", function () {
  before(async function () {
    driver = await wdTools.launchBrowser(driver, browserToTestOn);
  });

  describe("Sign in", function () {
    it("Visit Swimlane login page", async function () {
      await driver.get(url);
    });

    it('Verify login page loads, input credentials and press "login"', async function () {
      usernameField = await wdTools.waitForElement(
        driver,
        locators.usernameField
      );
      passwordField = await wdTools.waitForElement(
        driver,
        locators.passwordField
      );
      loginButton = await wdTools.waitForElement(driver, locators.loginButton);
    });

    it("Input credentials", async function () {
      await usernameField.sendKeys(configObj.credentials.username);
      await passwordField.sendKeys(configObj.credentials.password);
    });

    it('Click "Login" button', async function () {
      await loginButton.click();
    });

    it('verify "Landing" page loads', async function () {
      await wdTools.waitForElement(driver, locators.editProfileButton);
      await wdTools.waitForElement(driver, locators.workspacesNavMenuItem);
      await wdTools.waitForElement(driver, locators.dashboardsNavMenuItem);
      await wdTools.waitForElement(driver, locators.appRecordsNavMenuItem);
      await wdTools.waitForElement(driver, locators.reportsNavMenuItem);
      await wdTools.waitForElement(driver, locators.appsAndAppletsNavMenuItem);
      await wdTools.waitForElement(
        driver,
        locators.workspaceManagementNavMenuItem
      );
      newEmployeeRecordIcon = await wdTools.waitForElement(
        driver,
        locators.newEmployeeRecordIcon
      );
    });
  });

  describe("Add new record", function () {
    it('Click "New Employee Submission" icon', async function () {
      await newEmployeeRecordIcon.click();
    });
    it('"New Record" page loads', async function () {
      await wdTools.waitForElement(driver, locators.newEmployeeRecordPageTitle);
    });
  });

  after(() => driver && driver.quit());
});
