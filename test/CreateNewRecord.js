var assert = require("assert");
var wdTools = require("../tools/WebDriverTools");
const configObj = require("../tools/utils").parseConfig();

const url = configObj.websiteURL;
const browserToTestOn = process.env.npm_config_TestBrowser.toLowerCase(); //retrieving browser to run the test on from npm environment variable.
let driver;

describe("Sign in to Swimlane and add a record: ", function () {
  before(async function () {
    driver = await wdTools.launchBrowser(driver, browserToTestOn);
    await driver.manage().window().maximize();
  });

  describe("Sign in", function () {
    it("Visit Swimlane web site", async function () {
      await driver.get(url);
    });

    after(() => driver && driver.quit());
  });
});
