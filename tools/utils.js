const fs = require("fs");

function parseConfig() {
  try {
    const jsonString = fs.readFileSync("./config.json");
    return JSON.parse(jsonString);
  } catch (err) {
    console.log(err);
    return;
  }
}

module.exports = {
  parseConfig,
};
