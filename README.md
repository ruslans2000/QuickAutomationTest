# Setup instructions

1. Install Node.js from [here](https://nodejs.org/en/).
2. From VSC terminal, or CMD(setting to this directory by running "`cd <directory location>`") run command "`npm install`" to install all the dependencies listed in the package.json.
3. Install latest version of the browser to be tested on (__Chrome__ or __Firefox__ are supported at this point).
4. In the terminal (similar to step 2), run command to start the test: 
"`npm test --TestBrowser=firefox`" or "`npm test --TestBrowser=chrome`", where ***TestBrowser*** variable is where the name of the browser to be ran on is passed. 