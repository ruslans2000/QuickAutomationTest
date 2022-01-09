const fs = require("fs");

/**
 * Parses Json formatted config file
 * @param {string} configFileDir - Config file location path.
 * @return {Object} Returns JSON object.
 */
function parseConfig(configFileDir) {
  try {
    const jsonString = fs.readFileSync(configFileDir);
    return JSON.parse(jsonString);
  } catch (err) {
    console.log(err);
    return;
  }
}

module.exports = {
  parseConfig,
};
