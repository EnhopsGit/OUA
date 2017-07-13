/*var allure = require("nightwatch-allure-adapter");
 
module.exports = {
    reporter: allure.write
};*/

//In nightwatch/globals.js 
var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
	openBrowser: true,
	reportsDirectory: __dirname + '/Reports/HTMLReports',
    /* The filename that the html report will be saved as. */
    reportFilename: 'TestReport_OUA_'+ Date.now(),
    relativeScreenshots: true,
    themeName: 'default',
    
});
module.exports = {
	reporter: reporter.fn
};
 
